/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html, js, ts, vue}", 
    "./pages/**/*",
    './components/**/*.{html,js}'
],
theme: {
  extend: {
    fontFamily: {
      kayak: ["Kayak Sans", "sans-serif"],
    },
    boxShadow: {
      'glow': '0px 0px 8px 8px rgba(255, 255, 255, 0.3)',
    }
  },
},
  plugins: [],
}