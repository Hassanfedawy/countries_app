
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Ensure this is set to 'class' for class-based dark mode

  theme: {
    extend: {
      colors: {
        Dark_Mode_Elements: "hsl(209, 23%, 22%)",
        Dark_Mode_Background: "hsl(207, 26%, 17%)",
        Light_Mode_Text: "hsl(200, 15%, 8%)",
        Light_Mode_Input: "hsl(0, 0%, 52%)",
        Light_Mode_Background: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};


