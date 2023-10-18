import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTrail, animated } from 'react-spring';
import Resume from '../Resume';
import Hover from '../animations/Hover';

export default function Landing({ centerStyle, pulseEffect }) {

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

  return (
    <Container id='landing'>
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

        <Hover>
          <animated.div style={ trailFade[0] }>
            <Resume fadeEffect={ trailFade[1] } pulseEffect={ pulseEffect } />
          </animated.div>
        </Hover>
      </Box>
    </Container>
  );
}