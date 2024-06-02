/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font1': ['Alegreya Sans', 'sans-serif'],
        'font2': ['Alegreya Sans SC', 'sans-serif'],
        'font3':['Amarante', 'display']
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