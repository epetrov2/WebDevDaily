/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'mulish': ['Mulish', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}