/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#7c3aed',
          light: '#ede9fe',
          hover: '#6d28d9',
        },
        bg: {
          primary: '#ffffff',
          secondary: '#f5f3ff',
        },
      },
    },
  },
  plugins: [],
}
