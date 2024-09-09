/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
     "Black": "#1e2832",
     "primayBg": "#1e28320d"
      },
      fontFamily:{
        "primary": ['Roboto', 'sans-sarif'],
      }
    },
  },
  plugins: [],
}