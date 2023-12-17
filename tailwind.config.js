/** @type {import('tailwindcss').Config} */
const theme = require("tailwindcss/defaultTheme");

module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      animation:{
        move:'move 3s infinite ease-in-out'
      },
      keyframes:theme=>({
        move:{
          '0%':{transform: 'translateY(-15px)'},
          '100%':{transform: 'translateY(0)'},
        },
      })

    },
  },
  variants:{},
  plugins: [],
}
