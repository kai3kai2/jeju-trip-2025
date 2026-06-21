/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C7873",
        "primary-light": "#E8F4F2",
        accent: "#E8604C",
        secondary: "#F5A623",
        "secondary-light": "#FEF4E3",
        info: "#4A7FA5",
        "info-light": "#E6F0F8",
        dark: "#1a1a2e",
        gray: "#888",
        light: "#F7F8FA",
      },
      maxWidth: {
        desktop: "90%",
      }
    },
  },
  plugins: [],
}
