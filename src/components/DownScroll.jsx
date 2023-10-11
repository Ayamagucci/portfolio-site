import React from 'react';
import { Box, Tooltip, Fab } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { animated } from 'react-spring';

export default function DownScroll({ slideEffect, scrollToSection }) {

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Tooltip title='Scroll down!' placement='top'>
        <animated.div style={ slideEffect }>
          <Fab onClick={ scrollToSection } color='primary'>
            <KeyboardArrowDownIcon />
          </Fab>
        </animated.div>
      </Tooltip>
    </Box>
  );
}