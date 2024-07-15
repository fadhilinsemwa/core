/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#911841',
        secondary: '#e68f24',
        'secondary-dark': '#bf6f1a', // Darker variant of secondary
        'secondary-light': '#f8c471', // Light secondary color
        white: '#ffffff',
        black: '#000000',
      },
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
