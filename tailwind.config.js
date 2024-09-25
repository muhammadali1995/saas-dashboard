/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f5f7fa",
        secondary: "#2f5cff"
      },
      maxHeight: {
        150: "600px"
      }
    },
  },
  plugins: [],
}
