import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Box, Fab, Tooltip } from '@mui/material';
import CloseIcon from'@mui/icons-material/Close';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import { useSpring, animated } from 'react-spring';

export default function ImageModal({ open, handleClose, url, index, setImageIndex, gifs }) {

  const prevImage = () => {
    setImageIndex(
      (prevIndex) => (prevIndex === 0) ? (gifs.length - 1) : (prevIndex - 1)
    );
  };
  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % gifs.length);
  };

  // NOTE: animations not working! **
  const animPrevFab = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0)',
    config: { duration: 300 },
    loop: { reverse: true }
  });
  const animNextFab = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0)',
    config: { duration: 300 },
    loop: { reverse: true }
  });

  return (
    <Dialog open={ open } onClose={ handleClose }>
      <DialogTitle>
        <IconButton
          edge='end'
          onClick={ handleClose }
          sx={{ position: 'absolute', top: 1, right: 8 }}
          aria-label='Close'
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        { (index !== null) && (
          <>
            <img src={ url }
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: 'calc(100vh - 150px)',
                margin: '0 auto',
              }}
            />

            <Box sx={{
              position: 'absolute',
              left: '1rem',
              bottom: '50%'
            }}>
              <Tooltip title='Previous' placement='left'>
                <animated.div style={ animPrevFab }>
                  <Fab
                    onClick={ prevImage }
                    color='primary'
                    size='large'
                  >
                    <FastRewindIcon />
                  </Fab>
                </animated.div>
              </Tooltip>
            </Box>

            <Box sx={{
              position: 'absolute',
              right: '1rem',
              bottom: '50%'
            }}>
              <Tooltip title='Next' placement='right'>
                <animated.div style={ animNextFab }>
                  <Fab
                    onClick={ nextImage }
                    color='primary'
                    size='large'
                  >
                    <FastForwardIcon />
                  </Fab>
                </animated.div>
              </Tooltip>
            </Box>
          </>
        ) }
      </DialogContent>
    </Dialog>
  );
}