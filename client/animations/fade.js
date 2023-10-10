import React, { useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

export default function fade(ref, duration = 2500) {
  const fadeEffect = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration }
  });

  useEffect(() => {
    fadeEffect.start(); // start animation on mount
  }, [ fadeEffect ]);

  return (
    <animated.div style={ fadeEffect }>
      { ref.current }
    </animated.div>
  );
}

/*
import gsap from 'gsap';

export default function fade(ref) {
  gsap.from(ref.current, {
    opacity: 0, // initial opacity
    duration: 2.5, // secs
    ease: 'power2.inOut' // easing function
  });
}
*/