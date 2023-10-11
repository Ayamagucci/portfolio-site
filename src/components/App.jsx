import React, { useState, useEffect, useRef } from 'react';
import { Container, Box, Typography, Fab, Tooltip, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from '@mui/material/styles';
import Nav from './Nav';
import Resume from './Resume';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { useSpring, animated } from 'react-spring';
import ScrollIndicator from './ScrollIndicator';

export default function App({ darkMode, toggleDarkMode }) {

  // elevate AppBar & display FAB on scroll
  const [ elevation, setElevation ] = useState(0);
  const [ fabScroll, setFabScroll ] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  useEffect(() => {
    // add scroll event when component mounts
    window.addEventListener('scroll', handleScroll);

    // remove scroll when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  const fadeEffect = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2250 }
  });

  /*
  // animate fade on intro text
  const refIntroText = useRef(null);

  // call animation when component mounts
  useEffect(() => Fade(refIntroText), []); // <— gsap
  */

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    padding: '2rem'
  };

  return (
    <Container maxWidth='xl' sx={{ backgroundColor: useTheme().palette.background.default }}>
      <Nav elevation={ elevation } darkMode={ darkMode } toggleDarkMode={ toggleDarkMode } />

      {/* wrap animated component w/ animated.div (react-spring) */}
      <animated.div style={ fadeEffect }>
        <Box sx={ centerStyle }>
          <Typography variant='h1' /* ref={ refIntroText } */>
            <strong>Hi, I'm Alex!</strong>
          </Typography>
          <Resume />
        </Box>
      </animated.div>
      <ScrollIndicator />

      <About centerStyle={ centerStyle } />
      <ScrollIndicator />

      <Projects centerStyle={ centerStyle } />
      <ScrollIndicator />

      <Contact centerStyle={ centerStyle } />

      { elevation && (
        <Zoom in={ fabScroll }>
          <Tooltip title='Scroll back to top' placement='top'>
            <Fab onClick={ scrollToTop }
              sx={{
                position: 'fixed',
                bottom: '3.5rem',
                right: '3.5rem',
                zIndex: 1000 // NOTE: elevation only controls shadow (illusion of stacking effect)
              }}
              elevation={ elevation }
              color='primary'
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </Tooltip>
        </Zoom>
      ) }
    </Container>
  );
}