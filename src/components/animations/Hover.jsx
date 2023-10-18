import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { useSpring, animated } from 'react-spring';

export default function Hover({ children, ...props }) {

  const currentRef = useRef(null);

  const handleHover = () => {
    currentRef.current.style.transform = 'scale(1.2)';
  };

  const handleLeave = () => {
    currentRef.current.style.transform = 'scale(1)';
  };

  return (
    <animated.div
      ref={ currentRef }
      onMouseEnter={ handleHover }
      onMouseLeave={ handleLeave }
      { ...props }
    >
      { children }
    </animated.div>
  );
}