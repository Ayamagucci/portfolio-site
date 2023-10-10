import React from 'react';
import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact({ centerStyle }) {
  return (
    <Box id='contact' sx={{ ...centerStyle, mt: '17.5rem' }}>
      <Typography variant='h2'>
        CONTACT HERE
      </Typography>
    </Box>
  );
}