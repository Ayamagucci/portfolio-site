import React from 'react';
import { Zoom, Tooltip, Fab } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { animated } from 'react-spring';

export default function ScrollToTop({ fabAppear, /* pulseEffect */}) {

  const upScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  return (
    <Zoom in={ fabAppear }>
      {/* <animated.div style={ pulseEffect }>
        <Tooltip title='Back to Top' placement='top'>
          <Fab
            onClick={ upScroll }
            sx={{
              position: 'fixed',
              bottom: '3.5rem',
              right: '3.5rem',
              zIndex: 9999, // NOTE: elevation only controls shadow (illusion of stacking effect)
            }}
            color='primary'
          >
            <KeyboardDoubleArrowUpIcon />
          </Fab>
        </Tooltip>
      </animated.div> */}

      <Tooltip title='Back to Top' placement='top'>
        <Fab
          onClick={ upScroll }
          sx={{
            position: 'fixed',
            bottom: '3rem',
            right: '3rem',
            zIndex: 9999, // NOTE: elevation only controls shadow (illusion of stacking effect)
          }}
          color='primary'
        >
          <KeyboardDoubleArrowUpIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
}