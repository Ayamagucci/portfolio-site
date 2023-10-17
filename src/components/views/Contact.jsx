import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useSpring, animated } from 'react-spring';

export default function Contact({ centerStyle, pulseEffect }) {

  const emailSubject = encodeURIComponent('Let\'s Connect!');

  const scaleEffect = useSpring({
    from: { scale: 1 },
    to: { scale: 1.15 },
    config: { duration: 1200 },
    loop: true
  });

  return (
    <Container id='contact'>
      <Box sx={ centerStyle }>
        <Typography variant='h2' sx={{ fontSize: '6rem' }} color='textPrimary'>
          Connect with me:
        </Typography>

        <animated.div style={{ ...scaleEffect }}>
          {/* LINKEDIN */}
          <Link href='https://www.linkedin.com/in/ayamagucci/' target='_blank' color='primary'>
            <LinkedInIcon sx={{ fontSize: '7rem' }} />
          </Link>

          {/* GITHUB */}
          <Link href='https://github.com/Ayamagucci' target='_blank' color='primary' sx={{ mx: 2 }}>
            <GitHubIcon sx={{ fontSize: '7rem' }} />
          </Link>

          {/* EMAIL */}
          <Link href={ `mailto:alexbilly2110@gmail.com?subject=${ emailSubject }` } target='_blank' color='primary'>
            <EmailIcon sx={{ fontSize: '7rem' }} />
          </Link>
        </animated.div>

        <Typography variant='h4' sx={{ mt: '1rem' }} color='textPrimary'>
          Thanks for coming!
        </Typography>
      </Box>
    </Container>
  );
}