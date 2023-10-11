import React from 'react';
import { Zoom, Tooltip, Fab } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { animated } from 'react-spring';

export default function ScrollToTop({ elevation, fabScroll, pulseEffect }) {

  const upScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  return (
    <Zoom in={ fabScroll }>
      <Tooltip title='Scroll back to top' placement='top'>
        <animated.div style={ pulseEffect }>
          <Fab onClick={ upScroll }
            sx={{
              position: 'fixed',
              bottom: '3.5rem',
              right: '3.5rem',
              zIndex: 1000 // NOTE: elevation only controls shadow (illusion of stacking effect)
            }}
            elevation={ elevation }
            color='primary'
          >
            <KeyboardDoubleArrowUpIcon />
          </Fab>
        </animated.div>
      </Tooltip>
    </Zoom>
  );
}