/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      blur: {
        '4xl': '100px',
      },
      colors: {
        'custom-blue': '#3b82f6',
        'custom-purple': '#9333ea',
      },

    },
  },
  plugins: [],
}