import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSpring, useTrail, animated } from 'react-spring';
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
  const [ fabAppear, setFabAppear ] = useState(false);

  // handler for Nav & DownScroll
  const scrollToSection = (sectionID) => {
    const elem = document.getElementById(sectionID);

    if (elem) {
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
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  // stagger fade animations for intro vs resumé
  const introText = 'Hi, I\'m Alex!';

  const trailIntro = useTrail(introText.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400 }
  });

  const trailFade = useTrail(2, {
    from: { opacity: 0.5 },
    to: { opacity: 1 },
    config: { duration: 2000 }
  });

  const pulseEffect = useSpring({
    from: { opacity: 0.7 },
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
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Container maxWidth='xl'>
        <Nav
          scrollToSection={ scrollToSection }
          elevation={ elevation }
          darkMode={ darkMode }
          toggleDarkMode={ toggleDarkMode }
        />

        {/* INTRO TEXT ANIMATION */}
        <Box sx={ centerStyle }>
          <Typography variant='h1' color='textPrimary'>
            <strong>
              { trailIntro.map((props, i) => (
                <animated.span style={{ ...props }} key={ i }>
                  { introText[i] }
                </animated.span>
              )) }
            </strong>
          </Typography>
        </Box>

        <animated.div style={ trailFade[0] }>
          <Resume fadeEffect={ trailFade[1] } pulseEffect={ pulseEffect } />
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
        <Contact centerStyle={ centerStyle } pulseEffect={ pulseEffect } />

        { elevation && (
          <ScrollToTop elevation={ elevation } fabAppear={ fabAppear } pulseEffect={ pulseEffect } />
        ) }
      </Container>
    </Box>
  );
}