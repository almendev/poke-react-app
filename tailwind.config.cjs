/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pokeBlue: '#3c7eca',
        pokeBlueDark: '#003a70',
        pokeRed: '#ff0000',
        pokeRedDark: '#cc0100',
        pokeYellow: '#ffcb03',
      },
      fontFamily: {
        main: ['Roboto Mono', 'monospace'],
        title: ['Press Start 2P'],
      },
    },
  },
  plugins: [],
}
