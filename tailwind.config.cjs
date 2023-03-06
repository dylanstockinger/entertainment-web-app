/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend : {
      colors : {
        'red' : '#FC4747',
        'grey' : '#5A698F'
      },
    }
  },
  plugins: [],
}
