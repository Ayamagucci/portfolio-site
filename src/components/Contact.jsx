import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact({ centerStyle }) {

  const emailSubject = encodeURIComponent('You\'re Hired — Let\'s Talk!');

  return (
    <Box id='contact' sx={{ ...centerStyle, mt: '17.5rem' }}>
      <Typography variant='h2'>
        Connect with me!
      </Typography>

      <Box mt={ 2 }>
        {/* LINKEDIN */}
        <Link href='https://www.linkedin.com/in/ayamagucci/' target='_blank' color='inherit'>
          <LinkedInIcon sx={{ fontSize: '5rem' }} />
        </Link>

        {/* GITHUB */}
        <Link href='https://github.com/Ayamagucci' target='_blank' color='inherit' sx={{ mx: 2 }}>
          <GitHubIcon sx={{ fontSize: '5rem' }} />
        </Link>

        {/* EMAIL */}
        <Link href={ `mailto:alexbilly2110@gmail.com?subject=${ emailSubject }` } target='_blank' color='inherit'>
          <EmailIcon sx={{ fontSize: '5rem' }} />
        </Link>
      </Box>
    </Box>
  );
}