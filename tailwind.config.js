module.exports = {
  content: {
    files: ['./src/**/*.{html,njk,md}'],
  },
  theme: {
    extend: {
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
