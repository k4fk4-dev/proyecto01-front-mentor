/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
      'Stone100': 'hsl(30, 54%, 90%)',
      'Stones150': 'hsl(30, 18%, 87%)',
      'Stone-600': 'hsl(30, 10%, 34%)',
      'Stone-900': 'hsl(24, 5%, 18%)',
      'Brown-800': 'hsl(14, 45%, 36%)',
      'Rose-800': 'hsl(332, 51%, 32%)',
      'Rose-50': 'hsl(330, 100%, 98%)',
      },
      fontFamily:{
        'Young-Serif':['Young Serif','sans-serif'],
        'Outfit':['Outfit','sans-serif']
      }
    },
  },
  plugins: [],
}

