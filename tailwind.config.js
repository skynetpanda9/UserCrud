const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Ubuntu"],
        body: ["Ubuntu"],
        sans: ["Ubuntu", "sans-serif"],
      },
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",

      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      "custom-dash-card": "0 10px 50px -12px rgba(0, 0, 0, 0.25)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      purple: colors.purple,
      "main-bg": "#E5E5E5",
      "toggle-menu": "#F2F2F7",
      "side-nav-bg": "#E6EBEF",
      "menu-bg": "#F2F2F7",
      "custom-white": "#fff",
      "custom-blue": "#31B4E7",
      "custom-dark-grey": "#1F2937",
      "custom-font-light-grey": "#676767",
      "blue-link": "#1D4ED8",
      "custom-error": "#DC2626",
      "custom-bg": "#f6f6f6",
      "custom-button-blue": "#31B4E7",
      "custom-button-blue-disable": "#31B4E7",
      "custom-button-blue-grey": "#8298a1",
      "custom-p-color": "#464849",
      "custom-card-all-account": "#6E98A9",
      "custom-fair-orange": "#FF7533",
      "custom-fair-yellow": "#FFBE17",
      "card-hover": "#D6F0FA",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }

      "2k": "2048px",

      "3k": "2880px",
      // => @media (min-width: 1920px) { ... }

      "4k": "3840px",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      screen: "90vh",
      sideNav: "100vh",
      login: "80vh",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
};
