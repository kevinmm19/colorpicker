module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    debugScreens: {
      position: ['top', 'left'],
      selector: '.debug-screens',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
