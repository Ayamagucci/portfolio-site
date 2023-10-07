import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Switch, Box, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';

export default function Nav({ darkMode, toggleDarkMode }) {

  // elevate AppBar on scroll
  const [ elevation, setElevation ] = useState(0);

  const handleScroll = () => {
    // update elevation based on scroll position
    if (window.scrollY > 0) {
      setElevation(4);
    } else {
      setElevation(0);
    }
  };

  const scrollToSection = (sectionID) => {
    const elem = document.getElementById(sectionID);

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // add scroll event when component mounts
    window.addEventListener("scroll", handleScroll);

    // remove scroll when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={ elevation }
      sx={{/* top: 0, zIndex: 1000, */ borderRadius: "7px" }}
    >
      <Toolbar sx={{ justifyContent:"space-between" }}>
        <Box>
          <Button onClick={ () => scrollToSection('about') } color="inherit">
            About
          </Button>
          <Button onClick={ () => scrollToSection('projects') } color="inherit">
            Projects
          </Button>
          <Button onClick={ () => scrollToSection('skills') } color="inherit">
            Skills
          </Button>
          <Button onClick={ () => scrollToSection('contact') } color="inherit">
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