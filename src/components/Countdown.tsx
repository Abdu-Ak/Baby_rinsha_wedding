import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import { SectionHeading } from "./SectionHeading";
import { FloatingParticles } from "./FloatingParticles";

function getDayName(dateDisplay: string): string {
  const [, rest = ""] = dateDisplay.split(", ");
  if (rest) {
    const parsed = new Date(rest);
    if (!isNaN(parsed.getTime())) {
      return parsed
        .toLocaleDateString("en-US", { weekday: "long" })
        .toUpperCase();
    }
  }
  return (dateDisplay.split(", ")[0] ?? "").toUpperCase();
}

function parseDateParts(dateDisplay: string) {
  const [, rest = ""] = dateDisplay.split(", ");
  const parts = rest.split(" ");
  return {
    day: parts[0] ?? "09",
    month: (parts[1] ?? "August").toUpperCase(),
    year: parts[2] ?? "2026",
  };
}

function DateDisplay() {
  const { day, month, year } = parseDateParts(wedding.dateDisplay);
  const dayName = getDayName(wedding.dateDisplay);

  const cardBase =
    "date-box-card relative flex flex-col items-center justify-center text-center group overflow-hidden";

  return (
    <div className="date-section-wrap flex flex-col items-center gap-8">
      {/* ── Day-of-week badge ── */}
      <motion.div
        className="flex items-center gap-5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/55 md:w-28" />
        <p
          className="engraved-monogram tracking-widest"
          style={{ fontSize: "clamp(1rem, 2.2vw, 1.4rem)" }}
        >
          {dayName}
        </p>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/55 md:w-28" />
      </motion.div>

      {/* ── 3 Date Boxes ── */}
      <div className="date-boxes-grid">
        {/* Box 1 — 09 */}
        <motion.div
          className={cardBase}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: 0.12,
            type: "spring",
            stiffness: 280,
            damping: 26,
          }}
          whileHover={{ y: -6 }}
        >
          <span className="date-box-corner tl" />
          <span className="date-box-corner tr" />
          <span className="date-box-corner bl" />
          <span className="date-box-corner br" />
          <span className="date-box-top-line" />

          <p className="type-tracked-caps mb-2 opacity-70">Date</p>
          <p className="engraved-monogram date-box-value">{day}</p>
        </motion.div>

        {/* Box 2 — AUGUST */}
        <motion.div
          className={cardBase}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: 0.22,
            type: "spring",
            stiffness: 280,
            damping: 26,
          }}
          whileHover={{ y: -6 }}
        >
          <span className="date-box-corner tl" />
          <span className="date-box-corner tr" />
          <span className="date-box-corner bl" />
          <span className="date-box-corner br" />
          <span className="date-box-top-line" />

          <p className="type-tracked-caps mb-2 opacity-70">Month</p>
          <p className="engraved-monogram date-box-value">{month}</p>
        </motion.div>

        {/* Box 3 — 2026 */}
        <motion.div
          className={cardBase}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: 0.32,
            type: "spring",
            stiffness: 280,
            damping: 26,
          }}
          whileHover={{ y: -6 }}
        >
          <span className="date-box-corner tl" />
          <span className="date-box-corner tr" />
          <span className="date-box-corner bl" />
          <span className="date-box-corner br" />
          <span className="date-box-top-line" />

          <p className="type-tracked-caps mb-2 opacity-70">Year</p>
          <p className="engraved-monogram date-box-value">{year}</p>
        </motion.div>
      </div>
    </div>
  );
}

export function Countdown() {
  return (
    <section className="countdown-section relative z-20 bg-cream pattern-bg">
      <div
        className="absolute -top-px left-0 right-0 h-px bg-cream"
        aria-hidden
      />
      <FloatingParticles className="opacity-50" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-rose/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-20 md:block lg:left-12">
        <svg width="40" height="200" viewBox="0 0 40 200" fill="none">
          <path
            d="M20 0 Q40 50 20 100 Q0 150 20 200"
            stroke="#c9a962"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="20" cy="50" r="3" fill="#c9a962" />
          <circle cx="20" cy="100" r="4" fill="#c9a962" />
          <circle cx="20" cy="150" r="3" fill="#c9a962" />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 scale-x-[-1] opacity-20 md:block lg:right-12">
        <svg width="40" height="200" viewBox="0 0 40 200" fill="none">
          <path
            d="M20 0 Q40 50 20 100 Q0 150 20 200"
            stroke="#c9a962"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="20" cy="50" r="3" fill="#c9a962" />
          <circle cx="20" cy="100" r="4" fill="#c9a962" />
          <circle cx="20" cy="150" r="3" fill="#c9a962" />
        </svg>
      </div>

      <div className="content-wrap relative py-16 md:py-20">
        <SectionHeading
          label="Save the Date"
          title="The Big Day"
          scriptTitle
          subtitle="A date to remember"
          noDivider={true}
          mainClassName="mb-6 text-center md:mb-8"
        />

        <div className="relative mx-auto max-w-2xl">
          <DateDisplay />

          <motion.div
            className="mx-auto mt-12 h-px max-w-sm bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className="type-body-serif mt-8 text-center italic text-charcoal/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            We can&apos;t wait to celebrate with you
          </motion.p>
        </div>
      </div>
    </section>
  );
}
