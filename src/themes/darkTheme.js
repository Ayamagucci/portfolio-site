import { createTheme } from '@mui/material/styles';

// MUI recommended colors: https://m2.material.io/design/color/dark-theme.html
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    typography: {
      fontFamily: 'Roboto, sans-serif' // imported font family
    },
    primary: {
      main: "#1976D2"
    },
    secondary: {
      main: "#F50057"
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E"
    },
    text: {
      primary: "#FFFFFF"
    }
  }
});

export default darkTheme;