/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as per your file types and structure
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
        },
        button: {
          primary: "var(--color-button-primary)",
          secondary: "var(--color-button-secondary)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          button: "var(--color-text-button)",
        },
      },
      fontFamily: {
        albert: ["Albert Sans", "sans-serif"],
      },
    },
  },
  // plugins: [require("daisyui")],
};
