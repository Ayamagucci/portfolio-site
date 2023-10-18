import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Switch, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import scrollToSection from '../utils/scrollToSection';
import Hover from './animations/Hover';

export default function Nav({ elevation, darkMode, toggleDarkMode }) {

  const theme = useTheme();

  return (
    <AppBar position='sticky' elevation={ elevation }>
      <Toolbar sx={{
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '7px'
      }}>
        <Box sx={{ display: 'flex', mx: '1.5rem' }} >
          <Hover>
            <Button
              // name='landing'
              onClick={ () => scrollToSection('landing') }
              sx={{ color: theme.palette.background.paper }}
              aria-label='Resumé'
            >
              Resumé
            </Button>
          </Hover>

          <Hover>
            <Button
              // name='bio'
              onClick={ () => scrollToSection('bio') }
              sx={{ color: theme.palette.background.paper }}
              aria-label='Bio'
            >
              Bio
            </Button>
          </Hover>

          <Hover>
            <Button
              // name='projects'
              onClick={ () => scrollToSection('projects') }
              sx={{ color: theme.palette.background.paper }}
              aria-label='Projects'
            >
              Projects
            </Button>
          </Hover>

          <Hover>
            <Button
              // name='contact'
              onClick={ () => scrollToSection('contact') }
              sx={{ color: theme.palette.background.paper }}
              aria-label='Contact'
            >
              Contact
            </Button>
          </Hover>
        </Box>

        <Hover>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2' sx={{ mr: '0.5rem', color: theme.palette.background.paper }}>
              { darkMode ? 'DARK' : 'LIGHT' }
            </Typography>

            <Switch
              name='light-switch'
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
        </Hover>
      </Toolbar>
    </AppBar>
  );
}