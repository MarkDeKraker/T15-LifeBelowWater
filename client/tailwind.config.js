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
        "gradient-a":
        "linear-gradient(180deg, rgba(147,203,199,1) 0%, rgba(105,138,136,1) 55%, rgba(93,146,149,1) 60%, rgba(39,49,42,1) 100%)",
        "gradient-b":
          "linear-gradient(180deg, rgba(128,206,250,1) 0%, rgba(93,148,180,1) 55%, rgba(48,99,147,1) 60%, rgba(10,22,34,1) 100%)",
        "gradient-c":
        "linear-gradient(180deg, rgba(100,209,255,1) 0%, rgba(74,151,184,1) 55%, rgba(15,73,186,1) 60%, rgba(4,19,49,1) 100%)"
      },
      colors: {
        primary: colors.sky[600],
        secondary: colors.blue[200],
        tertiary: "rgba(0,55,75,1)",
        light: "#F5F5F5",
        altYellow: "#EABC3E",
        sun: "#F1D95B",
      },
    },
  },
  plugins: [],
};
