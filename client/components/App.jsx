import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function App({ darkMode, toggleDarkMode }) {

  const theme = useTheme();

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    padding: "2rem"
  };

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: theme.palette.background.default }}>
      <Nav darkMode={ darkMode } toggleDarkMode={ toggleDarkMode } />

      <Box sx={ centerStyle }>
        <Typography variant="h1">
          <strong>Hi, I'm Alex!</strong>
        </Typography>
      </Box>

      <About centerStyle={ centerStyle } />
      <Projects centerStyle={ centerStyle } />
      <Contact centerStyle={ centerStyle } />
    </Container>
  );
}