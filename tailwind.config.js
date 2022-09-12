/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Figtree']
      },
      backgroundImage: {
        'oldtheater': "url('images/oldtheater.jpeg')",
      }
    },
  },
  plugins: [],
}
