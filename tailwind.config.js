module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
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
      colors: {
        'primary': '#0B0D17'
      },
      fontSize: {
        '10xl': '9em',
        '7.5xl': '5em',
        'xbase': '1.125em',
        'sbase': '0.9375em'
      },
      boxShadow: {
        'bigExplore': '0 0 0 90px rgba(255, 255, 255, 0.1)',
        'smallExplore': '0 0 0 50px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
};
