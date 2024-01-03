/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      serif: ['Markazi Text', 'serif'],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    colors: {
      'primary-green': '#495E57',
      'primary-yellow': '#F4CE14',
      'secondary-dark': '#EE9972',
      'secondary-light': '#FBDABB',
      'highlight-light': '#EDEFEE',
      'highlight-dark': '#333333',
      black: '#000',
      white: '#FFF',
    },
  },
  plugins: [],
}
