/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerBackground': "url('/src/assets/HeaderIcons/backgroundImg.webp')",
        'bannerBackground' : "url('/src/assets/haritadailanara.png')"
      }
    },
  },
  plugins: [],
}