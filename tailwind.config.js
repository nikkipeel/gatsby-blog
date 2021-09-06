module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: {
        DEFAULT:'#F8F8F8',
        darken: '#eadfd7',
        active: '#fff'
      },
      black: '#333333',
      pink: '#DB0F94',
      //purple: '#5B21B6',
      //yellow: '#14527C',
      brightBlue: '#2486C9',
      blue: '#14527C',
      darkBlue: '#080B39',
      maroon: '#69124A',
      //green: '#34D399',
      //blue: '#00E2FC',
      //darkBlue: '#2563EB',
      //mauve: '#8f2d56'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
