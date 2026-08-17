/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '0',
      width: '1140px',
    },
    extend: {
      colors: {
        'xlys-red': '#C41E3A',
        'xlys-red-dark': '#A81830',
        'xlys-beige': '#F5F0E6',
        'xlys-beige-dark': '#E8DFD0',
        'xlys-brown': '#8B4513',
        'xlys-gold': '#DAA520',
        'xlys-dark': '#333333',
        'xlys-gray': '#666666',
        'xlys-light-gray': '#999999',
      },
      fontFamily: {
        'song': ['SimSun', 'STSong', 'serif'],
        'kai': ['KaiTi', 'STKaiti', 'serif'],
      },
      backgroundImage: {
        'texture': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
