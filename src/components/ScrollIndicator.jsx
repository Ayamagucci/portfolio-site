import React from 'react';
import { Box, Tooltip } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useSpring, animated } from 'react-spring';

export default function ScrollIndicator() {

  const animation = useSpring({
    from: { transform: 'translateY(0px)', opacity: 0 },
    to: { transform: 'translateY(40px)', opacity: 1 },
    config: { tension: 400, friction: 20, duration: 1250 },
    loop: true,
  });

  /*
  // const numDots = 5;
  // const dotSpacing = 20;

  const dotStyles = useTrail(numDots, {
    from: { transform: 'translateY(0px)', opacity: 0 },
    to: { transform: 'translateY(40px)', opacity: 1 },
    config: { tension: 400, friction: 20, duration: 1000 },
    loop: true,
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      { dotStyles.map((style, i) => (
        <animated.div key={ i }
          style={{
            ...style,
            width: '10px',
            height: '10px',
            backgroundColor: '#007bff',
            borderRadius: '50%',
            marginRight: '5px',
            position: 'relative',
            // top: `-${ i * dotSpacing }px`
          }}
        />
      )) }
    </Box>
  );
  */

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Tooltip title='Scroll down!' placement='top'>
        <animated.div style={ animation }>
          <KeyboardDoubleArrowDownIcon sx={{
            backgroundColor: '#E91E63',
            borderRadius: '50%',
            color: 'white',
            width: '40px',
            height: '40px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' // elevation
            }} />
        </animated.div>
      </Tooltip>
    </Box>
  );
}