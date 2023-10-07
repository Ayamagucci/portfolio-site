import React, { useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import { Link } from 'react-scroll';

export default function Nav({ darkMode, setDarkMode }) {

  const scrollToSection = (sectionID) => {
    const elem = document.getElementById(sectionID);

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: 1000 }}>
      <Toolbar>
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
        {/* <Link
          activeClass="active"
          to="about"
          spy={ true }
          smooth={ true }
          offset={ -70 }
          duration={ 500 }
          color="inherit"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={ true }
          smooth={ true }
          offset={ -70 }
          duration={ 500 }
          color="inherit"
          >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={ true }
          smooth={ true }
          offset={ -70 }
          duration={ 500 }
          color="inherit"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={ true }
          smooth={ true }
          offset={ -70 }
          duration={ 500 }
          color="inherit"
        >
          Contact
        </Link> */}
      </Toolbar>
    </AppBar>
  );
}