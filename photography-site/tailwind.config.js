/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: 'fantasy',
      secondary: 'bold Andale Mono, monospace',
      third: 'font-sans',
      fourth: 'Arial'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      backgroundImage: {
        'canon': "url('./images/home/canoneosr.jpeg')",
        'lens': "url('./images/lens2.png')",
        'lens2': "url('./images/lens3.png')"
      },
      colors: {
        primary: 'bisque',
        grey: '#484B4B',

        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
}
