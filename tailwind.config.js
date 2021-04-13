module.exports = {
  theme: {
    extend: {
      colors: {
        yellow: {
          '100': '#faeeb0',
          '200': '#faeba1',
          '300': '#f9e88e',
          '400': '#F8E478',
          '500': '#f4d83c',
          '600': '#eecc0d',
          '700': '#c5a90a',
          '800': '#a38c08',
          '900': '#877406',
        },
        pink: {
          '300': '#e78779',
          '400': '#ED7C70',
        }
      },
      textColor: {
        gray: {
          '100': '#faeeb0',
          '200': '#faeba1',
          '300': '#f9e88e',
          '400': '#222',
          '500': '#f4d83c',
          '600': '#eecc0d',
          '700': '#c5a90a',
          '800': '#a38c08',
          '900': '#877406',
        }
      },
    },
    fontFamily: {
      'serif': ['Arvo', 'sans-serif'],
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}

