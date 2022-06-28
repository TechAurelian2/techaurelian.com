module.exports = {
  content: {
    files: ['./src/**/*.{html,njk,md}'],
  },
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
