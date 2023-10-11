import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Fab, Tooltip, Paper } from '@mui/material';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import projects from '../data/projects';
import ImageModal from './ImageModal';

export default function Projects({ centerStyle }) {

  const [ projectIndex, setProjectIndex ] = useState(0);
  const { title, description, year, skills, gifs } = projects[projectIndex];

  const [ open, setOpen ] = useState(false);
  const [ imageIndex, setImageIndex ] = useState(null);

  // project handlers
  const prevProject = () => {
    setProjectIndex((prevIndex) => (prevIndex === 0) ? (projects.length - 1) : (prevIndex - 1));
  };
  const nextProject = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // image handlers
  const handleOpen = (index) => {
    setOpen(true);
    setImageIndex(index);
  };
  const handleClose = () => {
    setOpen(false);
    setImageIndex(null);
  };

  return (
    <Box id='projects' sx={{ ...centerStyle, marginY: '17.5rem' }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: '2.5rem'
        }}
      >
        <Tooltip title='Previous' placement='left'>
          <Fab
            color='primary'
            size='small'
            onClick={ prevProject }
          >
            <FastRewindIcon />
          </Fab>
        </Tooltip>

        <Typography
          variant='h2'
          sx={{ marginX: '1rem' }}
        >
          My Projects
        </Typography>

        <Tooltip title='Next' placement='right'>
          <Fab
            color='primary'
            size='small'
            onClick={ nextProject }
          >
            <FastForwardIcon />
          </Fab>
        </Tooltip>
      </Box>

      <Paper elevation={ 3 }>
        <Box p={ 2 } /* marginY="2rem" */>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            ml: '0.5rem',
            mb: '1rem'
          }}>
            <Typography variant='h5' sx={{ mr: '2.5rem' }}>
              <strong>{ title }</strong>
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              { year }
            </Typography>
          </Box>
          <Typography sx={{ mb: '1rem' }} variant='subtitle1' color='textSecondary'>
            { description }
          </Typography>
          <Typography variant='body2' color='textSecondary' gutterBottom>
            <strong>Technical Skills:</strong> { skills }
          </Typography>
        </Box>

        <Grid container spacing={ 2 }>
          { gifs.map((gif, i) => (
            <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ i }>
              <Box onClick={ () => handleOpen(i) }>
                <img
                  src={ gif }
                  alt={ `${ title }: ${ i }` }
                  style={{ width: '100%', cursor: 'pointer' }}
                />
              </Box>
            </Grid>
          )) }
        </Grid>

        { (open) && (
          <ImageModal
            open={ open }
            handleClose={ handleClose }
            url={ gifs[imageIndex] }
            index={ imageIndex }
            setImageIndex={ setImageIndex }
            gifs={ gifs }
          />
        ) }

      </Paper>
    </Box>
  );
}