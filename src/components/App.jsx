import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Fab } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring';
import Nav from './Nav';
import Resume from './Resume';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import DownScroll from './DownScroll';
import ScrollToTop from './ScrollToTop';

export default function App({ darkMode, toggleDarkMode }) {

  const theme = useTheme();

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    padding: '2rem'
  };

  // elevate AppBar & display FAB on scroll
  const [ elevation, setElevation ] = useState(0);
  const [ fabScroll, setFabScroll ] = useState(false);

  // handler for Nav & DownScroll
  const scrollToSection = (sectionID) => {
    const elem = document.getElementById(sectionID);

    if (elem) {
      // elem.scrollIntoView({ behavior: 'smooth' });
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const handleScroll = () => {
    const { scrollY } = window;

    // update elevation
    if (scrollY > 0) {
      setElevation(4);
    } else {
      setElevation(0);
    }

    // render FAB
    if (scrollY > 100) {
      setFabScroll(true);
    } else {
      setFabScroll(false);
    }
  };

  useEffect(() => {
    // add scroll event when component mounts
    window.addEventListener('scroll', handleScroll);

    // remove scroll when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  const introFadeEffect = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  const fadeEffect = useSpring({
    from: { opacity: 0.5 },
    to: { opacity: 1 },
    config: { duration: 2250 }
  });

  const pulseEffect = useSpring({
    from: { opacity: 0.8 },
    to: { opacity: 1 },
    config: { duration: 1500 },
    loop: true
  });

  const slideEffect = useSpring({
    from: { transform: 'translateY(0px)', opacity: 0 },
    to: { transform: 'translateY(40px)', opacity: 1 },
    config: { tension: 400, friction: 20, duration: 1250 },
    loop: true,
  });

  return (
    <Container maxWidth='xl' sx={{ backgroundColor: theme.palette.background.default }}>
      <Nav
        scrollToSection={ scrollToSection }
        elevation={ elevation }
        darkMode={ darkMode }
        toggleDarkMode={ toggleDarkMode }
      />

      <animated.div style={ introFadeEffect }>
        <Box sx={ centerStyle }>
          <Typography variant='h1'>
            <strong>Hi, I'm Alex!</strong>
          </Typography>
          <Resume fadeEffect={ fadeEffect } />
        </Box>
      </animated.div>

      <DownScroll
        scrollToSection={ () => scrollToSection('about') }
        slideEffect={ slideEffect }
        aria-label='Scroll Down to About'
      />
      <About centerStyle={ centerStyle } />

      <DownScroll
        scrollToSection={ () => scrollToSection('projects') }
        slideEffect={ slideEffect }
        aria-label='Scroll Down to Project'
      />
      <Projects pulseEffect={ pulseEffect } centerStyle={ centerStyle } />

      <DownScroll
        scrollToSection={ () => scrollToSection('contact') }
        slideEffect={ slideEffect }
        aria-label='Scroll Down to Contact'
      />
      <Contact centerStyle={ centerStyle } />

      { elevation && (
        <ScrollToTop elevation={ elevation } fabScroll={ fabScroll } pulseEffect={ pulseEffect } />
      ) }
    </Container>
  );
}