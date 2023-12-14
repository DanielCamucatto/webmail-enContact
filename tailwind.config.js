/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx, tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#fff',
        },
        dark: {
          primary: '#000',
        },
      },
    },
  },
  plugins: [],
}
