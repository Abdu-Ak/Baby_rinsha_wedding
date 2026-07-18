import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const input = path.join(root, "public/images/couple2.jpeg");
const outputs = [
  path.join(root, "public/images/couple_without_bg.png"),
  path.join(root, "public/images/couple2_without_bg.png"),
];

function isBackgroundPixel(r, g, b, a, threshold = 245) {
  if (a < 10) return true;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const avg = (r + g + b) / 3;
  return avg >= threshold && max - min <= 15;
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = new Uint8Array(data);
const visited = new Uint8Array(width * height);
const queue = [];

function idx(x, y) {
  return (y * width + x) * channels;
}

function pushIfBackground(x, y) {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const p = y * width + x;
  if (visited[p]) return;
  const i = idx(x, y);
  if (
    !isBackgroundPixel(pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3])
  )
    return;
  visited[p] = 1;
  queue.push(p);
}

// Flood-fill from image edges so white dress details stay intact
for (let x = 0; x < width; x++) {
  pushIfBackground(x, 0);
  pushIfBackground(x, height - 1);
}
for (let y = 0; y < height; y++) {
  pushIfBackground(0, y);
  pushIfBackground(width - 1, y);
}

while (queue.length > 0) {
  const p = queue.pop();
  const x = p % width;
  const y = (p - x) / width;
  pushIfBackground(x - 1, y);
  pushIfBackground(x + 1, y);
  pushIfBackground(x, y - 1);
  pushIfBackground(x, y + 1);
}

for (let p = 0; p < width * height; p++) {
  if (!visited[p]) continue;
  const i = p * channels;
  pixels[i + 3] = 0;
}

// Soften remaining fringe pixels adjacent to transparency
for (let y = 1; y < height - 1; y++) {
  for (let x = 1; x < width - 1; x++) {
    const p = y * width + x;
    const i = idx(x, y);
    if (pixels[i + 3] === 0) continue;

    const neighbors = [
      visited[p - width],
      visited[p + width],
      visited[p - 1],
      visited[p + 1],
    ];
    if (!neighbors.some(Boolean)) continue;

    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const avg = (r + g + b) / 3;
    if (avg >= 220) {
      pixels[i + 3] = Math.round(((255 - avg) / 35) * 255);
    }
  }
}

const pngBuffer = await sharp(Buffer.from(pixels), {
  raw: { width, height, channels },
})
  .png({ compressionLevel: 9 })
  .toBuffer();

for (const output of outputs) {
  await sharp(pngBuffer).toFile(output);
  console.log(`Saved transparent image to ${output}`);
}
