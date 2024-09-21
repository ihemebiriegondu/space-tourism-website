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

        'destbg-desktop': "url('/src/assets/destination/background-destination-desktop.jpg')",
        'destbg-tablet': "url('/src/assets/destination/background-destination-tablet.jpg')",
        'destbg-mobile': "url('/src/assets/destination/background-destination-mobile.jpg')",

        'crewbg-desktop': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'crewbg-tablet': "url('/src/assets/crew/background-crew-tablet.jpg')",
        'crewbg-mobile': "url('/src/assets/crew/background-crew-mobile.jpg')",
        
        'techbg-desktop': "url('/src/assets/technology/background-technology-desktop.jpg')",
        'techbg-tablet': "url('/src/assets/technology/background-technology-tablet.jpg')",
        'techbg-mobile': "url('/src/assets/technology/background-technology-mobile.jpg')",
      },
      color: {
        'primary': '#0B0D17'
      }
    },
  },
  plugins: [],
};
