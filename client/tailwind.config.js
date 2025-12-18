/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spotlight: {
          "0%": { opacity: 0, transform: "translate(-60%, -60%) scale(0.5)" },
          "100%": { opacity: 1, transform: "translate(-40%, -40%) scale(1)" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease-out forwards",
      },
    }

  },
  plugins: [],
}
