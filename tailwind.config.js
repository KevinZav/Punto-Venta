/** @type {import('tailwindcss').Config} */
const colors = require('./tw-config/colors.js');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

