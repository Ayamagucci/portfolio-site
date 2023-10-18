import React from 'react';
import { Box, Tooltip, Fab } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSpring, animated } from 'react-spring';
import Hover from './animations/Hover';

export default function DownScroll({ maxScroll, section }) {

  const slideEffect = useSpring({
    from: { transform: 'translateY(0px)', opacity: 0 },
    to: { transform: 'translateY(40px)', opacity: 1 },
    config: { tension: 400, friction: 20, duration: 1250 },
    loop: true,
  });

  const scrollDown = (sectionID) => {
    const current = document.getElementById(section);

    if (current) {
      const next = current.nextElementSibling;
      if (next) {
        next.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Box sx={{
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      bottom: '3rem',
      width: '100%',
      alignItems: 'center',
      zIndex: 1000,
      visibility: (window.scrollY < maxScroll) ? ('visible') : ('hidden')
    }}>
      <Hover>
        <Tooltip title='Next Section' placement='top'>
          <animated.div style={ slideEffect }>
            <Fab onClick={ scrollDown } color='primary'>
              <KeyboardArrowDownIcon />
            </Fab>
          </animated.div>
        </Tooltip>
      </Hover>
    </Box>
  );
}