/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          800: '#955A21',
          900: '#7a4819',
          600: '#b06f2a',
        },
      },
    },
  },
  plugins: [],
}
