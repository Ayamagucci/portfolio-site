import { createTheme } from '@mui/material/styles';

// MUI recommended colors: https://m2.material.io/design/color/dark-theme.html
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#E91E63"
    },
    secondary: {
      main: "#F50057"
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5"
    },
    text: {
      primary: "#333333"
    }
  }
});

export default lightTheme;