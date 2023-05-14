/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0B2434",
        customGreen: "#00A896",
        customWhite: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
