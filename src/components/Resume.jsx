import React from 'react';
import { Fab, Zoom } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import { animated } from 'react-spring';

export default function Resume({ fadeEffect, pulseEffect }) {

  const handleDownload = () => {
    const resumeLink = document.createElement('a');

    resumeLink.href = '/resume';
    resumeLink.download = 'RESUME-Alexander_Yamaguchi.pdf';

    document.body.appendChild(resumeLink);
    resumeLink.click();

    document.body.removeChild(resumeLink);
  };

  return (
    // <Zoom in={ true } /* style={{ transitionDelay: '500ms' }} */>
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
    // </Zoom>
  );
}