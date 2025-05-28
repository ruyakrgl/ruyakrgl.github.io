/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    '*.html',
    '*.md',
    '_layouts/**/*.html',
    '_includes/**/*.html',
    '_posts/**/*.md',
    '_projects/**/*.md',
    '_publications/**/*.md',
    '_news/**/*.md',
    '_outreach/**/*.md',
    '_personal/**/*.md'
  ],
  theme: {
    fontFamily: {
      'sans': ['Raleway'],
      'mulish': ["Mulish"]
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}


