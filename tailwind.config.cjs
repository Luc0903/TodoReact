/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        main__cyan: '#2F80ED',
        main__gray: '#333333',
        button__red: '#EB5757',
        input__border: '#BDBDBD',
      },
    },
  },
  plugins: [],
};
