import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    typography: {
      fontFamily: 'Roboto, sans-serif' // imported font family
    },
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