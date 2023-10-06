import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={ Link } to="/" color="inherit">
          About
        </Button>
        <Button component={ Link } to="/skills" color="inherit">
          Skills
        </Button>
        <Button component={ Link } to="/projects" color="inherit">
          Projects
        </Button>
        <Button component={ Link } to="/contacts" color="inherit">
          Contacts
        </Button>
      </Toolbar>
    </AppBar>
  );
}