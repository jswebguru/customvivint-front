/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as per your file types and structure
  ],
  theme: {
    extend: {
      colors: {
        text: {
          white: "#ffffff",
        },
      },
    },
  },
  // plugins: [require("daisyui")],
};
