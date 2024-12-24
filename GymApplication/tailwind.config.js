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
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        pressDown1: {
          '30%, 40%, 100%': { transform: 'translateY(0)' },
          '35%': { transform: 'translateY(10px)' },
        },
        pressDown2: {
          '70%, 80%, 100%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(10px)' },
        },
        pressDown3: {
          '30%, 40%, 100%': { transform: 'translateY(0)' },
          '35%': { transform: 'translateY(10px)' },
        },
        pressDown4: {
          '40%, 50%, 100%': { transform: 'translateY(0)' },
          '45%': { transform: 'translateY(10px)' },
        },
        pressDown5: {
          '20%, 30%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(10px)' },
        },
        pressDown6: {
          '60%, 70%, 100%': { transform: 'translateY(0)' },
          '65%': { transform: 'translateY(10px)' },
        },
        pressDown7: {
          '10%, 20%, 100%': { transform: 'translateY(0)' },
          '15%': { transform: 'translateY(10px)' },
        },
        pressDown8: {
          '35%, 45%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        pressDown1: 'pressDown1 2s infinite',
        pressDown2: 'pressDown2 3s infinite',
        pressDown3: 'pressDown3 4s infinite',
        pressDown4: 'pressDown4 2.5s infinite',
        pressDown5: 'pressDown5 2.5s infinite',
        pressDown6: 'pressDown6 3.5s infinite',
        pressDown7: 'pressDown7 2.2s infinite',
        pressDown8: 'pressDown8 3.2s infinite',
      },
    },
  },
  plugins: [],
};
