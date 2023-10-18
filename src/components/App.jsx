// libraries
import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSpring, useTrail, animated } from 'react-spring';

// components
import Nav from './Nav';
import Resume from './Resume';
import DownScroll from './DownScroll';
import ScrollToTop from './ScrollToTop';

// views
import Landing from './views/Landing';
import Bio from './views/Bio';
import Projects from './views/Projects';
import Contact from './views/Contact';

import scrollToSection from '../utils/scrollToSection';

export default function App({ darkMode, toggleDarkMode }) {

  const theme = useTheme();

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
    // padding: '2rem'
  };

  const pulseEffect = useSpring({
    from: { opacity: 0.7 },
    to: { opacity: 1 },
    config: { duration: 1500 },
    loop: true
  });

  // elevate AppBar & display FAB on scroll
  const [ elevation, setElevation ] = useState(0);
  const [ fabAppear, setFabAppear ] = useState(false);

  const [ currentSection, setCurrentSection ] = useState('landing');
  const [ maxScroll, setMaxScroll ] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // calc max scroll based on total scrollable height
    const landingHeight = document.getElementById('landing').clientHeight;
    const bioHeight = document.getElementById('bio').clientHeight;
    const projectsHeight = document.getElementById('projects').clientHeight;
    const contactHeight = document.getElementById('contact').clientHeight;

    const totalHeight = landingHeight + bioHeight + projectsHeight + contactHeight;

    setMaxScroll(totalHeight - window.innerHeight);

    if (
      scrollPosition >= 0
      &&
      scrollPosition < landingHeight
    ) {
      setCurrentSection('landing');

    } else if (
      scrollPosition >= landingHeight
      &&
      scrollPosition < landingHeight + bioHeight
    ) {
      setCurrentSection('bio');

    } else if (
      scrollPosition >= landingHeight + bioHeight
      &&
      scrollPosition < landingHeight + bioHeight + projectsHeight
    ) {
      setCurrentSection('projects');

    } else {
      setCurrentSection('contact');
    }

    // elevate Nav
    if (scrollPosition > 0) {
      setElevation(4);
    } else {
      setElevation(0);
    }

    // render FAB
    if (scrollPosition > 100) {
      setFabAppear(true);
    } else {
      setFabAppear(false);
    }
  };

  useEffect(() => {
    // add scroll event when component mounts
    window.addEventListener('scroll', handleScroll);

    // remove scroll when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Container maxWidth='xl'>
        <Nav
          scrollToSection={ scrollToSection }
          elevation={ elevation }
          darkMode={ darkMode }
          toggleDarkMode={ toggleDarkMode }
        />

        {/* SCREENS */}
        <Landing centerStyle={ centerStyle } pulseEffect={ pulseEffect } />
        <Bio centerStyle={ centerStyle } />
        <Projects centerStyle={ centerStyle } pulseEffect={ pulseEffect } />
        <Contact centerStyle={ centerStyle } pulseEffect={ pulseEffect } />
      </Container>

      { elevation && (
        <ScrollToTop fabAppear={ fabAppear } /* pulseEffect={ pulseEffect } *//>
      ) }

      <DownScroll maxScroll={ maxScroll } section={ currentSection } />
    </Box>
  );
}