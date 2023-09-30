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
    extend: {
      colors: {
        primary: {
          lightRed: "hsl(0, 100%, 67%)",
          orangeyYellow: "#FFB01F",
          greenTeal: "#00BD91",
          cobaltBlue: "#1125D4",

        },
        gradient: {
          lightSlateBlue: "#7857FF",
          lightRoyalBlue: "#2E2BE9",
          violetBlueCircle: "hsla(256, 72%, 46%, 1)",
          persianBlueCircle: "hsla(241, 72%, 46%, 0)",
        },
        neutral: {
          paleBlue: "#EBF1FF",
          lightLavender: "#C8C7FF",
          darkGrayBlue: "#303B5A",
        },
      },
    },
  },
  plugins: [],
}
