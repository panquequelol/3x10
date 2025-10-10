import { defineConfig } from 'tailwindcss'

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ["var(--font-serif)"]
      },
    },
  },
})
