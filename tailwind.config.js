const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system'],
      },
      colors: {
        ...colors,
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    cursor: ({ after }) => after(['disabled']),
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
  },
}
