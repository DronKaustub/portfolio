/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0b283c',     // main dark background
        'brand-light': '#8aa6b8',    // lighter accent
        'brand-soft': '#c7d5d8',     // soft neutral
        'brand-deep': '#3c5d7c'      // deeper accent (buttons etc.)
      }
    },
  },
  plugins: [],
}

