/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "600px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        light: "var(--color-light)",
        white: "var(--color-white)",
        black: "var(--color-black)",
      },

      minWidth: {
        minWidth: "var(--min-width)",
      },

      maxWidth: {
        maxWidth: "var(--max-width)",
      },

      height: {
        tabHeight: "var(--tab-height)",
        tabHeightMobile: "var(--tab-height-mobile)",
        mainHeight: "var(--main-height)",
        mainHeightMobile: "var(--main-height-mobile)",
      },

      maxHeight: {
        maxHeight: "var(--max-height)",
      },

      minHeight: {
        minHeight: "var(--min-height)",
      },

      padding: {
        default: "var(--padding-default)",
        mobile: "var(--padding-mobile)",
        navTop: "var(--padding-nav-top)",
      },

      fontSize: {
        default: "15px",
        mobile: "13px",
      },

      borderRadius: {
        default: "8px",
        tab: "6px",
      },

      lineHeight: {
        default: "1.4",
      },
    },
  },
  plugins: [],
};
