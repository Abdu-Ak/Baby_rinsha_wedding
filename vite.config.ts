import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { wedding } from './src/data/wedding'

function weddingHtmlMeta() {
  return {
    name: 'wedding-html-meta',
    transformIndexHtml(html: string) {
      return html
        .replace('__DOCUMENT_TITLE__', wedding.display.documentTitle)
        .replace('__META_DESCRIPTION__', wedding.display.metaDescription)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), weddingHtmlMeta()],
})
