const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system'],
    },
    colors: {
      ...colors,
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
  },
}
