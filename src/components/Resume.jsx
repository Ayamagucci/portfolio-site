import React from 'react';
import { Container, Box, Typography, Fab, Zoom } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import axios from 'axios';

export default function Resume() {

  const handleDownload = () => {
    const resumeLink = document.createElement('a');

    resumeLink.href = '/resume';
    resumeLink.download = 'RESUME-Alexander_Yamaguchi.pdf';

    document.body.appendChild(resumeLink);
    resumeLink.click();

    document.body.removeChild(resumeLink);
  };

  return (
    <Fab
      onClick={ handleDownload }
      sx={{
        position: 'absolute',
        bottom: '42%',
        // center horizontally
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      variant='extended'
      color='primary'
      aria-label='Download Resumé'
    >
      <DescriptionIcon /> Download My Resumé
    </Fab>
  );
}