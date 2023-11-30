/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'mulish': ['Mulish', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      fontSize: {
        '2xs': '0.6rem'
      }
    },
  },
  plugins: [],
}