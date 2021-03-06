const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // or 'media' or 'className'
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        blob2: "blob2 3s infinite",
        updown: "updown 6s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-30px, 0px) scale(1)",
          },
          "66%": {
            transform: "translate(30px, -50px) scale(1.5)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(0px, -30px) scale(1)",
          },
          "66%": {
            transform: "translate(0px, -50px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        updown: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(0px, -100px) scale(1.2)",
          },
          "50%": {
            transform: "translate(0px, 0px) scale(1.2)",
          },
          "75%": {
            transform: "translate(0px, 100px) scale(1.2)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        cyan: colors.cyan,
        teal: colors.teal,

        green: colors.emerald,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,
        stone: colors.stone,
        trueGray: colors.trueGray,
        gray: colors.gray,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
      },
    },
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "bumblebee", // first one will be the default theme
    ],
  },
};
