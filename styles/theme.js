
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#000',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Inconsolata', 'monospace'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderWidth: {
        '6': '6px',
      },
      boxShadow: {
        'terminal': '0px 0px 0px 4px #13ce66, 0px 0px 0px 6px #000',
      },
    },
  },
};
