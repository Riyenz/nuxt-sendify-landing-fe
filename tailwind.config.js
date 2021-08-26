module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system'],
      },
      colors: {
        transparent: 'transparent',
        black: '#24212b',
        primary: '#2df8bb',
        secondary: '#243a5a',
        tertiary: '#243a5a',
      },
      fontSize: {
        '15px': '15px',
        '23px': '23px',
        '35px': '35px',
      },
      maxWidth: {
        '1200px': '1200px',
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
