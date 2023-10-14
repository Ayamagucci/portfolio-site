import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Switch, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';

export default function Nav({ scrollToSection, elevation, darkMode, toggleDarkMode }) {

  const theme = useTheme();

  return (
    <AppBar position='sticky' elevation={ elevation }>
      <Toolbar sx={{
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '7px'
      }}>
        <Box>
          <Button
            onClick={ () => scrollToSection('about') }
            sx={{ color: theme.palette.background.paper }}
            aria-label='About'
          >
            About
          </Button>

          <Button
            onClick={ () => scrollToSection('projects') }
            sx={{ color: theme.palette.background.paper }}
            aria-label='Projects'
          >
            Projects
          </Button>

          <Button
            onClick={ () => scrollToSection('contact') }
            sx={{ color: theme.palette.background.paper }}
            aria-label='Contact'
          >
            Contact
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='body2' sx={{ mr: '0.5rem', color: theme.palette.background.paper }}>
            { darkMode ? 'DARK' : 'LIGHT' }
          </Typography>

          <Switch
            checked={ darkMode }
            onChange={ toggleDarkMode }
            sx={{
              '& .MuiSwitch-thumb': {
                backgroundColor: theme.palette.background.paper
              },
              '& .MuiSwitch-track': {
                backgroundColor: theme.palette.background.paper + ' !important'
              }
            }}
          />
          { darkMode ? (
            <Brightness4OutlinedIcon sx={{ color: theme.palette.background.paper }} />
          ) : (
            <Brightness4Icon sx={{ color: theme.palette.background.paper }} />
          ) }
        </Box>
      </Toolbar>
    </AppBar>
  );
}