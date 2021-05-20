module.exports = {
  purge: [
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'seagreen': '#1D6781',
        'lightgreen': '#D8E9E7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
