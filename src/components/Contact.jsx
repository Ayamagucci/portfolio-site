import React, { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useSpring, animated } from 'react-spring';

export default function Contact({ centerStyle, pulseEffect }) {

  const emailSubject = encodeURIComponent('You\'re Hired — Let\'s Talk!');

  const scaleEffect = useSpring({
    from: { scale: 1 },
    to: { scale: 1.05 },
    config: { duration: 1200 },
    loop: true
  });

  return (
    <Box id='contact' sx={{ ...centerStyle, mt: '17.5rem' }}>
      <Typography variant='h2' sx={{ fontSize: '6rem' }} color='inherit'>
        Connect with me!
      </Typography>

      <animated.div style={{ ...scaleEffect, mt: 2 }}>
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
    </Box>
  );
}