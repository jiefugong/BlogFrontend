const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: theme => ({
        "screen-70": "70vh",
        "screen-80": "80vh",
        "screen-85": "85vh",
        "screen-90": "90vh",
        "screen-91": "91vh",
        "screen-92": "92vh",
        "screen-95": "95vh",
      }),
    },
  },
  plugins: [],
}
