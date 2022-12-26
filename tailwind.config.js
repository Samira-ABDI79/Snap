const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lameBlue: "#E7FAFE",
        darkBlue: "#ccf1f9",
        mainBlue: "#0ec9f1",
        darkerBlue: "#00c0e9",
        secondary: "rgba(0, 0, 0, 0.6)",
        lightPurple: "rgba(244, 245, 250, 1)",
        darkPurple: "rgba(145, 85, 253, 1)",
        lightBlack: "rgba(58, 53, 65, 0.87)",
        primary: "#00ef74",
        primary2:"#21aa58",
        menuItem:"#444",
        black2:"#1c2023",
        black3:"#3f3f3f",
        graydark:"#777",
        lightBlue:"#f2f5f8",
        gray:"#a3a3a3"
      },
      container: {
        center: true,
       
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      
      },
      fontFamily: {
        inter: ["inter", ...defaultTheme.fontFamily.sans],
        lobster: ["lobster", ...defaultTheme.fontFamily.sans],
      },
      rotate: { 135: "135deg", 45: "45deg  " },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      screens: {
        xs: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
