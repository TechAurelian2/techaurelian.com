const colors = require('tailwindcss/colors')

module.exports = {
  content: {
    files: ['./src/**/*.{html,njk,md}'],
  },
  theme: {
    extend: {
      colors: {
        accent: colors.indigo,
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
