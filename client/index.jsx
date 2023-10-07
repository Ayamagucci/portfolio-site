import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './components/App';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

const Root = () => {

  const [ darkMode, setDarkMode ] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // save preference to localStorage
    localStorage.setItem('darkMode', !darkMode);
  };

  // load the preference when app starts
  useEffect(() => {
    const darkSettings = localStorage.getItem('darkMode');

    if (darkSettings !== null) {
      // NOTE: localStorage & sessionStorage store data as strings **
      setDarkMode(darkSettings === 'true');
    }
  }, []);

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <App darkMode={ darkMode } toggleDarkMode={ toggleDarkMode } />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(<Root />);