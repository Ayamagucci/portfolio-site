import React, { useState } from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
// import { useSpring, useTrail, animated } from 'react-spring';

export default function Contact({ centerStyle, pulseEffect }) {

  const icons = [
    <LinkedInIcon sx={{ fontSize: '7rem' }} />,
    <GitHubIcon sx={{ fontSize: '7rem' }} />,
    <EmailIcon sx={{ fontSize: '7rem' }} />
  ];

  const [ hoveredIndex, setHoveredIndex ] = useState(null);

  /*
  const emailSubject = encodeURIComponent('Let\'s Connect!');

  const [ isHovered, setIsHovered ] = useState(false);

  const scaleTrail = useTrail(icons.length, {
    from: { scale: 1 },
    to: { scale: isHovered ? 1.2 : 1 },
    config: { tension: 300, friction: 10 }
  });

  const defaultScaleLoop = useSpring({
    from: { scale: 1 },
    to: { scale: 1.15 },
    config: { duration: 1200 },
    loop: true
  });

  const hoverScaleEffect = useSpring({
    scale: isHovered ? '1.2' : '1',
    config: { tension: 300, friction: 10 }
  });
  */

  return (
    <Container id='contact'>
      <Box sx={ centerStyle }>
        <Typography variant='h2' sx={{ fontSize: '6rem' }} color='textPrimary'>
          Connect with me:
        </Typography>

        <Box sx={{ display: 'flex' }}>
          { icons.map((icon, i) => (
            <Link key={ i }
              href={ getLinkByIndex(i) }
              target='_blank'
              color='primary'
              sx={{
                display: 'inline-block',
                '&:hover': {
                  textDecoration: 'none',
                  // color: 'red',
                  transform: 'scale(1.2)'
                },
                mx: '0.5rem'
              }}
              onMouseEnter={ () => setHoveredIndex(i) }
              onMouseLeave={ () => setHoveredIndex(null) }
            >
              { icon }
            </Link>
          )) }
        </Box>

        {/* LINKEDIN */}
        {/* <animated.div
          style={ isHovered ? hoverScaleEffect : defaultScaleLoop }
          onMouseEnter={ () => setIsHovered(true) }
          onMouseLeave={ () => setIsHovered(false) }
        >
          <Link href='https://www.linkedin.com/in/ayamagucci/' target='_blank' color='primary'>
            <LinkedInIcon sx={{ fontSize: '7rem' }} />
          </Link> */}

          {/* GITHUB */}
          {/* <Link href='https://github.com/Ayamagucci' target='_blank' color='primary' sx={{ mx: '1rem' }}>
            <GitHubIcon sx={{ fontSize: '7rem' }} />
          </Link> */}

          {/* EMAIL */}
          {/* <Link href={ `mailto:alexbilly2110@gmail.com?subject=${ emailSubject }` } target='_blank' color='primary'>
            <EmailIcon sx={{ fontSize: '7rem' }} />
          </Link>
        </animated.div> */}

        <Typography variant='h4' sx={{ mt: '1rem' }} color='textPrimary'>
          Thanks for visiting!
        </Typography>
      </Box>
    </Container>
  );
}

function getLinkByIndex(index) {
  switch (index) {
    case 0:
      return 'https://www.linkedin.com/in/ayamagucci/';
    case 1:
      return 'https://github.com/Ayamagucci';
    case 2:
      return `mailto:alexbilly2110@gmail.com?subject=${ encodeURIComponent('Let\'s Connect!') }`;
    default:
      return '';
  }
}