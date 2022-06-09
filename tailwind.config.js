module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'heroimage':"url('/assets/hero.png')",
        'insure-bg':"url('/assets/insure.png')",
      }
    },
  },
  plugins: [],
}