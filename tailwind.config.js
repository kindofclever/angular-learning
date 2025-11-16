/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      colors: {
        'primary': '#0c0542',      // Dark Purple
        'secondary': '#e58f65',    // Coral/Peach
        'accent': '#fffecb',       // Light Yellow/Cream
        'blue': '#84a9c0',         // Soft Blue
        'purple': '#6a66a3',       // Medium Purple
      },
    },
  },
  plugins: [],
}

