import React from 'react';
import { Box } from '@mui/material';
import { useTrail, animated } from 'react-spring';

export default function TrailingDots() {

  const numDots = 5;
  const dotSpacing = 20;

  const dotStyles = useTrail(numDots, {
    from: { transform: 'translateY(0px)', opacity: 0 },
    to: { transform: 'translateY(40px)', opacity: 1 },
    config: { tension: 400, friction: 20, duration: 1000 },
    loop: true, /* reset: true */
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
            top: `-${ i * dotSpacing }px`
          }}
        />
      )) }
    </Box>
  );
}