/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
            "./app/**/*.{js,ts,jsx,tsx}",
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",

            // Or if using `src` directory:
            "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
            colors: {
                  black: "#000",
                  white: "#ffffff",
                  darkblue: "#3b5998",
                  blue: "#3093f0",
                  purple: "#7e5bef",
                  "blue-light": "#68aae8",
                  pink: "#ff49db",
                  orange: "#ff7849",
                  green: "#13ce66",
                  yellow: "#ffc82c",
                  "gray-dark": "#273444",

                  gray: "#8492a6",
                  "gray-light": "#cfd2d6",
                  transparent: "transparent",
                  current: "currentColor",
                  white: "#ffffff",
                  purple: "#3f3cbb",
                  midnight: "#121063",
                  metal: "#565584",
                  tahiti: "#3ab7bf",
                  silver: "#ecebff",
                  "bubble-gum": "#ff77e9",
                  bermuda: "#78dcca",
            },
            fontFamily: {
                  sans: ["Graphik", "sans-serif"],
                  serif: ["Merriweather", "serif"],
            },
            extend: {
                  spacing: {
                        "8xl": "96rem",
                        "9xl": "128rem",
                  },
                  borderRadius: {
                        "4xl": "2rem",
                  },
            },
      },
};
