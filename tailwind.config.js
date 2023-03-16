/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#f01f15",
        secondery: {
          100: "#8d98ff",
          200: "#636bff",
        },
      },
      fontFamily: {
        firasans: ["Fira Sans", "Montserrat"],
        Montserrat: ["Montserrat", "sans - serif"],
        Satisfy: ["Satisfy", "cursive"],
      },
    },
  },
  plugins: [],
};
