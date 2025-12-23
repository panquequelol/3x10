import { defineConfig } from 'tailwindcss'

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ["var(--font-serif)"]
      },
      colors: {
        background: '#fffcf5',
        'dark-green': '#132318',
        'light-green': '#e1ff76',
        text: '#132318',
        accent: '#E4572E',
        secondary: '#C2B8A3',
      },
    },
  },
})
