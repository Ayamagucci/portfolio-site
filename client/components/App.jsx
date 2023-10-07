import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {

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
    <Container maxWidth="xl">
      <Nav darkMode={ darkMode } setDarkMode={ setDarkMode } />

      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        padding: "2rem",
      }}
      >
        <Typography variant="h1">
          <strong>Hi, I'm Alex!</strong>
        </Typography>
      </Box>

      <About />
      <Projects />
      <Contact />
    </Container>
  );
}