import React, { useState } from 'react';
import { Container, Box, Typography, Fab, Tooltip, Grid, Paper, ImageList, ImageListItem } from '@mui/material';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import projects from '../../data/projects';
// import ProjectDetails from '../ProjectDetails';
import ImageModal from '../ImageModal';
import { animated } from 'react-spring';

export default function Projects({ centerStyle, pulseEffect }) {

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
    <Container id='projects'>
      <Box sx={ centerStyle }>
        <Box
          sx={{ display: 'flex', mb: '1.5rem' }}
          alignItems='center'
          justifyContent='center'
        >
          <Tooltip title='Previous' placement='left'>
            <animated.div style={ pulseEffect }>
              <Fab
                color='primary'
                size='small'
                onClick={ prevProject }
              >
                <FastRewindIcon />
              </Fab>
            </animated.div>
          </Tooltip>

          <Typography sx={{ mx: '1rem' }} variant='h2' color='textPrimary'>
            My Projects
          </Typography>

          <Tooltip title='Next' placement='right'>
            <animated.div style={ pulseEffect }>
              <Fab
                color='primary'
                size='small'
                onClick={ nextProject }
              >
                <FastForwardIcon />
              </Fab>
            </animated.div>
          </Tooltip>
        </Box>

        <Paper elevation={ 3 }>
          <Box sx={{ p: '1.5rem' }}>
            <Box
              alignItems='center'
              sx={{
                display: 'flex',
                ml: '0.5rem',
                mb: '1rem'
              }}
            >
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
            <ImageList cols={ 3 } rowHeight={ 300 }>
              { gifs.map((gif, i) => (
                <ImageListItem key={ i }>
                  <img
                    src={ gif }
                    alt={ `${ title }: ${ i }` }
                    onClick={ () => handleOpen(i) }
                    loading='lazy'
                    style={{ width: '100%', cursor: 'pointer' }}
                  />
                </ImageListItem>
              )) }
            </ImageList>
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
    </Container>
  );
}