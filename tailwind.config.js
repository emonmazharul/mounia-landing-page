/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        colorBlack:'#1D1D1B',
        colorBlue:'#B9D3EE',
        colorGreen:'#6FCF97',
        lightBlue:'#EDF6FF',
        colorWhite:'#FFFFFF',
        lightPink:'#FFCCCC',
        colorSix:'#E4BB52',
        colorSeven:'#302D2D',
        colorEight:'#757575',
        colorNine:'#D9D9D9',

      }
    },
    fontFamily:{
      // sans:['Open Sans', 'Montserrat']
      sans:['Poppins']
    }
  },
  plugins: [],
}

