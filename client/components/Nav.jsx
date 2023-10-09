import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Switch, Box, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
// import { useSpring, animated } from 'react-spring';

export default function Nav({ elevation, darkMode, toggleDarkMode }) {

  const scrollToSection = (sectionID) => {
    const elem = document.getElementById(sectionID);

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={ elevation }
      sx={{ borderRadius: "7px" }}
    >
      <Toolbar sx={{ justifyContent:"space-between" }}>
        <Box>
          <Button
            onClick={ () => scrollToSection('about') }
            color="inherit"
            aria-label="About"
          >
            About
          </Button>
          <Button
            onClick={ () => scrollToSection('projects') }
            color="inherit"
            aria-label="Projects"
          >
            Projects
          </Button>
          <Button
            onClick={ () => scrollToSection('skills') }
            color="inherit"
            aria-label="Skills"
          >
            Skills
          </Button>
          <Button
            onClick={ () => scrollToSection('contact') }
            color="inherit"
            aria-label="Contact"
          >
            Contact
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ mr: "0.5rem" }}>
            { darkMode ? "Dark" : "Light" }
          </Typography>
          <Switch checked={ darkMode } onChange={ toggleDarkMode } />
          { darkMode ? <Brightness4OutlinedIcon /> : <Brightness4Icon /> }
        </Box>
      </Toolbar>
    </AppBar>
  );
}