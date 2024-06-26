"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { interFont, poppinsFont, merriWeatherFont } from "./fonts/font";

const bgColor = "#14150D";
const bgPaperColor = "#FFFFFF";
const primaryColor = "#E7FA71";
const secondaryColor = "#FFFFFF"; //  "#0045FF";  //  "#d88447";
const textColor = "#FFFFFF";
const errorColor = "#FE2F46";
const successColor = "#90ee90";

// secondary theme
// const bgColor = "#040D15";
// const bgPaperColor = "#FFFFFF";
// const primaryColor = "#00FFFF";
// const secondaryColor = "#FFFFFF"; //  "#0045FF";  //  "#d88447";
// const textColor = "#FFFFFF";
// const errorColor = "#FE2F46";
// const successColor = "#90ee90";

// Create a theme instance.
let theme = createTheme({
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,

      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },

  palette: {
    mode: "dark",

    background: {
      paper: bgPaperColor,
      default: bgColor,
    },

    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: errorColor,
    },
    text: {
      primary: textColor,
    },

    success: {
      main: successColor,
    },
  },
  typography: {
    fontFamily: interFont.style.fontFamily,
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 400,
          fontSize: "128px",
          fontStyle: "normal",
          lineHeight: "90%",
          fontFamily: poppinsFont.style.fontFamily,
          letterSpacing: "-0.05em",
          // width: "465px"
        },
        h2: {
          fontWeight: 400,
          fontSize: "106px",
          fontStyle: "normal",
          lineHeight: "95.4px",
          fontFamily: poppinsFont.style.fontFamily,
          letterSpacing: "-0.05em",
        },
        h3: {
          fontFamily: poppinsFont.style.fontFamily,
          fontWeight: 400,
          fontSize: "52px",
          fontStyle: "normal",
          lineHeight: "62.4px",
          letterSpacing: "-0.05em",
        },
        h4: {
          fontFamily: poppinsFont.style.fontFamily,
          fontWeight: 400,
          fontSize: "32px",
          fontStyle: "normal",
          lineHeight: "130%",
        },

        h5: { fontSize: 30 },
        h6: {},
        body1: {
          lineHeight: "150%",

          fontWeight: 500,
          fontSize: "20px",
          fontStyle: "normal",
          fontFamily: poppinsFont.style.fontFamily,
        },

        body2: {
          lineHeight: "28px",

          fontWeight: 400,
          fontSize: "16px",
          fontStyle: "normal",
          fontFamily: poppinsFont.style.fontFamily,

          opacity: 0.9,
        },
      },
      defaultProps: {},
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
