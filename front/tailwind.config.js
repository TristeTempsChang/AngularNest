/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'standard': ["Montserrat"],
      'serif': ['ui-serif'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'inter': ['Inter']
    },
    boxShadow: {
      'custom': '2px 2px 4px #00000080',
    }
  },
  plugins: [],
}

