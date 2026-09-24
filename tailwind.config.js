const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1360px" },
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
        // Brand
        ink: "#01203F", // space blue
        night: "#000D1C", // deepest background
        abyss: "#011529",
        cobalt: "#0344DC",
        ember: "#FF4F00", // international orange
        sand: "#E3CC9C",
        paper: "#F5EFE3",
        mist: "#BABAC4",
        // Legacy aliases still used by legal pages
        primary: "#0344DC",
        "space-blue": "#01203F",
        "alc-beige": "#E3CC9C",
        "international-orange": "#FF4F00",
        "body-color": "#5B6475",
      },
      fontFamily: {
        sans: ["var(--font-body)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        // legacy class names
        syne: ["var(--font-display)", ...fontFamily.sans],
        poppins: ["var(--font-body)", ...fontFamily.sans],
      },
      fontSize: {
        "display-xl": ["clamp(2.35rem, 7.4vw, 7.6rem)", { lineHeight: "0.92", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(2rem, 4.3vw, 4.4rem)", { lineHeight: "0.98", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(1.8rem, 3.7vw, 3.5rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-sm": ["clamp(1.55rem, 2.5vw, 2.3rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        marquee: { to: { transform: "translate3d(-50%,0,0)" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        flicker: {
          "0%,100%": { transform: "scaleY(1) scaleX(1)", opacity: "1" },
          "50%": { transform: "scaleY(1.12) scaleX(0.94)", opacity: "0.9" },
        },
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        flicker: "flicker 0.18s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
