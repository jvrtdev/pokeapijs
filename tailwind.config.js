/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grass': '#8bbe8a',
        'fire': '#ffa756',
        'water': '#58abf6',
        'poison': '#9f6e97',
        'normal': '#b5b9c4',
        'bug': '#8bd674',
        'flying': '#748fc9',
        'eletric': '#f2cb55',
        'ground': '#f78551',
      }
    },
  },
  plugins: [],
}