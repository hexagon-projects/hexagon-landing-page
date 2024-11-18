/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-primary': '#0A58CA',
        'light-secondary': '#136FF8',
        'light-bg': '#F5F6FA',
        'gray-100': '#F2F4F7',
        'gray-600': '#475467',
        'gray-700': '#344054',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

