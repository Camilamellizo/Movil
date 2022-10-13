/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
      'movil': "url('./carcsa-movil.png')",
    }     },
  },
  plugins: [],
}
