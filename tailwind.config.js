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
      'primary-green-faded': 'rgba(73,94,87,0.5)',
      'primary-yellow': '#F4CE14',
      'dark-yellow': '#EE9972',
      'secondary-dark': '#EE9972',
      'secondary-light': '#FBDABB',
      'secondary-light-faded': 'rgba(251, 218, 187, 0.75)',
      'highlight-light': '#EDEFEE',
      'highlight-dark': '#333333',
      black: '#000',
      white: '#FFF',
    },
  },
  plugins: [],
}
