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
        '14px': '14px',
        '15px': '15px',
        '18px': '18px',
        '23px': '23px',
        '24px': '24px',
        '35px': '35px',
      },
      maxWidth: {
        '1200px': '1200px',
        '1320px': '1320px',
      },
      width: {
        120: '30rem',
        140: '35rem',
      },
      boxShadow: {
        surround: '0px 0px 20px 0px rgba(0,0,0,0.25)',
        spread: '0px 10px 40px rgba(36, 43, 61, 0.16)',
      },
      transitionProperty: {
        width: 'width',
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
