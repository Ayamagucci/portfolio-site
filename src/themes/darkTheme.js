import { createTheme } from '@mui/material/styles';

// MUI recommended colors: https://m2.material.io/design/color/dark-theme.html
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    typography: {
      fontFamily: 'Roboto, sans-serif'
    },
    primary: {
      main: '#64ffda', // teal
    },
    secondary: {
      main: '#f48fb1', // pink
    },
    background: {
      default: '#121212', // dark gray
      paper: '#1E1E1E', // darker gray
    },
    text: {
      primary: '#ffffff', // white text
    },
    accent: {
      main: '#ffab40', // darker orange
    }
  }
});

export default darkTheme;