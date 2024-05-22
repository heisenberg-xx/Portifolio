/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font1': ['Ubuntu', 'sans-serif'],
        'font2': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary':'#000000',
        'secondary':'#000000',
        'text1':'#ffffff'
      }

    },
  },
  plugins: [],
}