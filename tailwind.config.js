const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      primary: "#0344DC",
      yellow: "#FBB040",
      "body-color": "#637381",
      "space-blue": "#01203F",
      "alc-beige": "#E2CC9C",
      "frontier-gray": "#BABAC4",
      "international-orange": "#FF4F00",
    },
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        primary: "#0344DC",
        "space-blue": "#01203F",
        "alc-beige": "#E2CC9C",
        "frontier-gray": "#BABAC4",
        "international-orange": "#FF4F00",
        "body-color-dark": "#959CB1",
        "gray-dark": "#1E232E",
        stroke: {
          stroke: "#E3E8EF",
          dark: "#353943",
        },
        gray: {
          ...colors.gray,
          dark: "#1E232E",
          light: "#F0F2F9",
        },
      },
      fontFamily: {
        sans: ["'Inter'", ...fontFamily.sans],
        syne: "var(--font-syne)",
        poppins: ['"Poppins"', "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-dark": "0px 10px 40px rgba(0, 0, 0, 0.03)",
        menu: "0px 4px 8px rgba(0, 0, 0, 0.08)",
        "menu-dark": "0px 4px 8px rgba(0, 0, 0, 0.1)",
        "feature-card": "0px 5px 10px rgba(0, 0, 0, 0.05)",
        "feature-card-dark": "0px 5px 10px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        one: "0px 1px 1px rgba(0, 0, 0, 0.08)",
        two: "0px 2px 3px rgba(0, 0, 0, 0.1)",
        three: "0px 5px 7px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
