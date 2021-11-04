module.exports = {
  purge: ['./packages/website/**/*.{js,jsx,ts,tsx}', './packages/website/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cool: ['P22 Mackinac']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      fontSize: {
        micro: '.675rem'
      }
    }
  },
  variants: {
    extend: {
      padding: ['focus', 'hover'],
      margin: ['focus', 'hover'],
      borderWidth: ['focus']
    }
  },
  plugins: []
}
