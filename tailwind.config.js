/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      display: ["Satisfy", "cursive"],
    },
    extend: {
      backgroundImage: {
        'mobile-nav': "url('assets/background.gif')",
      }
    },
  },
  plugins: [],
}
