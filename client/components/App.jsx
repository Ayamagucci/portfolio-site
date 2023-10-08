import React, { useState, useEffect, useRef } from 'react';
import { Container, Box, Typography, Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from '@mui/material/styles';
import gsap from 'gsap';
// import fade from '../animations/fade';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import projectData from '../bio/projectData';

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
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  useEffect(() => {
    // add scroll event when component mounts
    window.addEventListener("scroll", handleScroll);

    // remove scroll when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);

  // animate fade on intro text
  const refIntroText = useRef(null);

  const fade = (ref) => {
    gsap.from(ref.current, {
      opacity: 0, // initial opacity
      duration: 3, // secs
      ease: "power2.inOut" // easing function
    });
  };

  // call animation on intro text (ref) when component mounts
  useEffect(() => fade(refIntroText), []);

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    padding: "2rem"
  };

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: useTheme().palette.background.default }}>
      <Nav elevation={ elevation } darkMode={ darkMode } toggleDarkMode={ toggleDarkMode } />

      <Box sx={ centerStyle }>
        <Typography variant="h1" ref={ refIntroText }>
          <strong>Hi, I'm Alex!</strong>
        </Typography>
      </Box>

      <About centerStyle={ centerStyle } />
      <Projects projectData={ projectData } centerStyle={ centerStyle } />
      <Contact centerStyle={ centerStyle } />

      { elevation && (
        <Zoom in={ fabScroll }>
          <Fab onClick={ scrollToTop }
            sx={{
              position: "fixed",
              bottom: "3.5rem",
              right: "3.5rem",
              zIndex: 1000 // NOTE: elevation only controls shadow (illusion of stacking effect)
            }}
            elevation={ elevation }
            color="primary"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      ) }
    </Container>
  );
}