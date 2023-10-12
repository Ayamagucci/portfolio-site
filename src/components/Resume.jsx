import React from 'react';
import { Fab } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import { animated } from 'react-spring';
import axios from 'axios';

export default function Resume({ fadeEffect, pulseEffect }) {

  const handleDownload = async() => {
    try {
      const res = await fetch('/resume');
      const blob = await res.blob();

      // create URL for blob
      const url = window.URL.createObjectURL(blob);

      // create anchor elem to trigger download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'RESUME.pdf';

      // trigger download
      a.click();

      // housekeeping
      window.URL.revokeObjectURL(url);

    } catch(err) {
      // console.error(`Error downloading resumé: ${ err }`);
      alert(`Error downloading resumé: ${ err }`);
    }

    /*
    const resumeLink = document.createElement('a');

    resumeLink.href = '/resume';
    resumeLink.download = 'RESUME-Alexander_Yamaguchi.pdf';

    document.body.appendChild(resumeLink);
    resumeLink.click();

    document.body.removeChild(resumeLink);
    */
  };

  return (
    <animated.div style={ pulseEffect }>
      <animated.div style={ fadeEffect }>
        <Fab onClick={ handleDownload }
          sx={{
            position: 'absolute',
            bottom: '42%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          variant='extended'
          color='primary'
          aria-label='Download Resumé'
        >
          <DescriptionIcon /> Download My Resumé
        </Fab>
      </animated.div>
    </animated.div>
  );
}