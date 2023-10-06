import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton, Modal, Paper } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import projectData from '../projectData';

export default function Projects() {

  const [ projectIndex, setProjectIndex ] = useState(0);
  const [ open, setOpen ] = useState(false);
  const [ imageIndex, setImageIndex ] = useState(0);

  const currentProject = projectData[projectIndex];

  // project handlers
  const prevProject = () => {
    setProjectIndex((prevIndex) => (prevIndex === 0) ? (projectData.length - 1) : (prevIndex - 1));
  };
  const nextProject = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  // image handlers
  const prevImage = () => {
    setImageIndex(
      (prevIndex) => (prevIndex === 0) ? (currentProject.gifs.length - 1) : (prevIndex - 1)
    );
  };
  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % currentProject.gifs.length);
  };
  const openImage = (index) => {
    setImageIndex(index);
    setOpen(true);
  };
  const closeImage = () => {
    setImageIndex(0);
    setOpen(false);
  };

  return (
    <Box>
      <Typography variant="h3" align="center" gutterBottom>
        My Projects
      </Typography>

      <Paper>
        <Box p={ 2 }>
          <Typography variant="h5" gutterBottom>
            { currentProject.title }
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            { currentProject.description }
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            { currentProject.year }
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Technical Skills: { currentProject.skills }
          </Typography>

          <Box sx={{ textAlign: 'center', marginTop: '16px' }}>
            <IconButton onClick={ prevProject }>
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton onClick={ nextProject }>
              <NavigateNextIcon />
            </IconButton>
          </Box>
        </Box>

        <Grid container spacing={ 2 }>
          { currentProject.gifs.map((gif, i) => (
            <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ i }>
              <Box onClick={ () => openImage(gif) }>
                <img
                  src={ gif }
                  alt={ currentProject.title }
                  style={{ width: '100%', cursor: 'pointer' }}
                />
              </Box>
            </Grid>
          )) }
        </Grid>

        <Modal open={ open } onClose={ closeImage }>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <img
              src={ currentProject.gifs[imageIndex] }
              alt={ currentProject.title }
              style={{ maxWidth: '100%', maxHeight: '80vh' }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '16px' }}>
              <IconButton onClick={ prevImage }>
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton onClick={ nextImage }>
                <NavigateNextIcon />
              </IconButton>
            </Box>
          </Box>
        </Modal>
      </Paper>
    </Box>
  );
}