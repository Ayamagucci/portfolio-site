import React from 'react';
import { Zoom, Tooltip, Fab } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { animated } from 'react-spring';
import Hover from './animations/Hover';

export default function ScrollToTop({ fabAppear, /* pulseEffect */}) {

  const upScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={ fabAppear }>
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