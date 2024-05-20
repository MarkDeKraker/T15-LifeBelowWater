/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(180deg, rgba(128,206,250,1) 0%, rgba(93,148,180,1) 55%, rgba(48,99,147,1) 60%, rgba(10,22,34,1) 100%)",
      },
      colors: {
        primary: colors.sky[600],
        secondary: colors.blue[200],
        tertiary: "rgba(0,55,75,1)",
        light: "#F5F5F5",
        alt_yellow: "#EABC3E",
      },
    },
  },
  plugins: [],
};
