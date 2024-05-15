const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_yellow: '#CEA649',
        primary_gray: '#ACACAC',
      },
      backgroundImage: {
        header: "url('./src/assets/header-bg.png')"
      }
    },
    fontFamily: {
      radley: ['Radley', 'sans-serif']
    }
  },
  plugins: [],
});
