import React, { useState } from 'react';
import { Container, Box, Typography, Fab, Tooltip, Grid, Paper, ImageList, ImageListItem } from '@mui/material';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import { animated } from 'react-spring';
import projects from '../../data/projects';
import ImageModal from '../ImageModal';
import Hover from '../animations/Hover';

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
    <Container id='projects' sx={{ mt: '200px' }}>
      <Box sx={ centerStyle }>
        <Box
          sx={{ display: 'flex', /* mb: '1.5rem' */}}
          alignItems='center'
          justifyContent='center'
        >
          {/* <Tooltip title='Previous' placement='left'>
            <animated.div style={ pulseEffect }>
              <Fab
                color='primary'
                size='small'
                onClick={ prevProject }
              >
                <FastRewindIcon />
              </Fab>
            </animated.div>
          </Tooltip> */}

          <Typography sx={{/* mx: '1rem', */ mb: '0.5rem' }} variant='h2' color='textPrimary'>
            My Projects
          </Typography>

          {/* <Tooltip title='Next' placement='right'>
            <animated.div style={ pulseEffect }>
              <Fab
                color='primary'
                size='small'
                onClick={ nextProject }
              >
                <FastForwardIcon />
              </Fab>
            </animated.div>
          </Tooltip> */}
        </Box>

        <Box
          sx={{ display: 'flex', mb: '1rem', width: '1000px' }}
          alignItems='center'
          justifyContent='center'
        >
          <Typography
            sx={{ textAlign: 'center' }}
            variant='subtitle1'
            color='textPrimary'
          >
            In the last year, I've been completely immersed in various projects, collaborating with different teams in agile environments. These experiences have not just expanded my technical knowledge but also offered me the chance to test my skills in real-world scenarios, significantly honing my problem-solving & troubleshooting abilities. Plus, I've had the opportunity to dabble in a diverse array of tech ecosystems, equipping me with additional tools, platforms, & dev environments, broadening my perspective on available resources & enhancing my adaptability.
          </Typography>
        </Box>

        <Box
          sx={{ display: 'flex' }}
          alignItems='center'
          justifyContent='center'
        >
          <Hover>
            <Tooltip title='Previous' placement='left'>
              <animated.div style={ pulseEffect }>
                <Fab
                  color='primary'
                  size='large'
                  onClick={ prevProject }
                >
                  <FastRewindIcon />
                </Fab>
              </animated.div>
            </Tooltip>
          </Hover>

          <Paper sx={{ mx: '1.5rem' }} elevation={ 3 }>
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
              <ImageList cols={ 3 } rowHeight={ 600 }>
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

          <Hover>
            <Tooltip title='Next' placement='right'>
              <animated.div style={ pulseEffect }>
                <Fab
                  color='primary'
                  size='large'
                  onClick={ nextProject }
                >
                  <FastForwardIcon />
                </Fab>
              </animated.div>
            </Tooltip>
          </Hover>
        </Box>
      </Box>
    </Container>
  );
}