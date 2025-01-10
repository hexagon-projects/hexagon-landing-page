/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        100: "400px",
      },
      width: {
        25: "100px",
      },
      colors: {
        "light-primary": "#0A58CA",
        "light-primary-2": "#084CAD",
        "light-secondary": "#02B5FF",
        tertiary: "#02B5FF",
        "light-bg": "#F5F6FA",
        "gray-100": "#F2F4F7",
        "gray-600": "#475467",
        "gray-700": "#344054",
        "gray-800": "#1D2939",
        "light-blue-100": "#E0F2FE",
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
