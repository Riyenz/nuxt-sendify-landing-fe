module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system'],
      },
      colors: {
        transparent: 'transparent',
        black: '#24212B',
        primary: {
          black: '#32294A',
          dark: '#6F42F3',
          DEFAULT: '#A183FE',
          light: '#F0E8FE',
        },
        secondary: '#515C72',
        tertiary: '#00D98B',
        ambient: '#94C5FF',
      },
      fontSize: {
        '14px': '14px',
        '15px': '15px',
        '17px': '17px',
        '18px': '18px',
        '20px': '20px',
        '23px': '23px',
        '24px': '24px',
        '26px': '26px',
        '35px': '35px',
        '47px': '47px',
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
        height: 'height',
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
