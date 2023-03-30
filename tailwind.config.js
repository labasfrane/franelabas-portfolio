/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      customDark: "#222831",
      customGray: "#EEEEEE",
      customDarkGray: "#393E46",
      customTeal: "#00ADB5",
      customPurple: "#3c2f6d",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",

        // Complex site-specific row configuration
        projectLayout: "4rem 1fr 1fr",
      },
    },
  },
  plugins: [],
};
