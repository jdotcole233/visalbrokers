module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'heroimage':"url('/assets/hero.png')",
        'hero-sm':"url('/assets/small-hero.png')",
        'insure-bg':"url('/assets/insure.png')",
        'woman-bg':"url('/assets/woman.png')",
        'family-bg':"url('/assets/family.png')",
      }
    },
  },
  plugins: [],
}