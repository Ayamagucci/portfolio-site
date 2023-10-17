import React from 'react';
import { Fab } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import { animated } from 'react-spring';

export default function Resume({ fadeEffect, pulseEffect }) {

  const handleDownload = async() => {
    try {
      // fetch pdf
      const res = await fetch('/resume');

      // convert pdf into blob
      const blob = await res.blob();

      // create URL to ref blob in browser
      const url = window.URL.createObjectURL(blob);

      // create anchor elem to trigger download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'RESUME.pdf';

      // trigger download
      a.click();

      // (housekeeping): release URL to free up resources **
      window.URL.revokeObjectURL(url);
      // blobs consume memory —> good practice to revoke when done w/ it!

    } catch(err) {
      alert(`Error downloading resumé: ${ err }`);
    }
  };

  return (
    <animated.div style={ fadeEffect }>
      <animated.div style={ pulseEffect }>
        <Fab onClick={ handleDownload }
          // sx={{
          //   position: 'absolute',
          //   bottom: '42%',
          //   left: '50%',
          //   transform: 'translateX(-50%)',
          // }}
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