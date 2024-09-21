module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        bellefair: ["Bellefair", "sans-serif"],
      },
      backgroundImage: {
        'homebg-desktop': "url('/src/assets/home/background-home-desktop.jpg')",
        'homebg-tablet': "url('/src/assets/home/background-home-tablet.jpg')",
        'homebg-mobile': "url('/src/assets/home/background-home-mobile.jpg')",
      }
    },
  },
  plugins: [],
};
