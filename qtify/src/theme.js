import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins";

const theme = createTheme({
  palette: {
    primary: {
      main: "#34C94B",
    },
    secondary: {
      main: "#121212",
    },
    tertiary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --color-primary: #34C94B;
          --color-secondary: #121212;
          --color-tertiary: #FFFFFF;
        }
        body {
          font-family: 'Poppins', Arial, sans-serif;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          "&.MuiButton-containedSecondary": {
            color: "#34C94B", // Primary color for text
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },
  },
});

export default theme;
