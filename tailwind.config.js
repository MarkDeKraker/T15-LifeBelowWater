/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: colors.sky[600],
        secondary: colors.blue[200],
        tertiary: "rgba(0,55,75,1)",
        light: "#F5F5F5",
        alt_yellow: "#EABC3E"
      },
    },
  },
  plugins: [],
};
