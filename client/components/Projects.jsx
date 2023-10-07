import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Fab, Tooltip, Paper } from '@mui/material';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import projectData from '../bio/projectData';
import ImageModal from './ImageModal';

export default function Projects({ centerStyle }) {

  const [ projectIndex, setProjectIndex ] = useState(0);
  const [ open, setOpen ] = useState(false);
  const [ imageIndex, setImageIndex ] = useState(0);

  // const [ isPlaying, setPlaying ] = useState(false);

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

  /* useEffect starts timer when isPlaying changes
  useEffect(() => {
    let timer;

    if (isPlaying) {
      timer = setInterval(nextImage, 30000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);

  }, [ isPlaying, currentProject ]);
  */

  return (
    <Box id="projects" sx={{ ...centerStyle, marginY: "17.5rem" }}>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: "2.5rem"
        }}
      >
        <Tooltip title="Previous" placement="left">
          <Fab
            color="primary"
            size="small"
            onClick={ prevProject }
          >
            <FastRewindIcon />
          </Fab>
        </Tooltip>

        <Typography
          variant="h2"
          sx={{ marginX: "1rem" }}
        >
          My Projects
        </Typography>

        <Tooltip title="Next" placement="right">
          <Fab
            color="primary"
            size="small"
            onClick={ nextProject }
          >
            <FastForwardIcon />
          </Fab>
        </Tooltip>
      </Box>

      <Paper elevation={ 3 }>
        <Box p={ 2 } /* marginY="2rem" */>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            ml: "0.5rem",
            mb: "1rem"
            }}
          >
            <Typography variant="h5" sx={{ mr: "2.5rem" }}>
              <strong>{ currentProject.title }</strong>
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              { currentProject.year }
            </Typography>
          </Box>
          <Typography sx={{ mb: "1rem" }} variant="subtitle1" color="textSecondary">
            { currentProject.description }
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Technical Skills:</strong> { currentProject.skills }
          </Typography>
        </Box>

        <Grid container spacing={ 2 }>
          { currentProject.gifs.map((gif, i) => (
            <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ i }>
              <Box onClick={ () => openImage(gif) }>
                <img
                  src={ gif }
                  alt={ currentProject.title }
                  style={{ width: "100%", cursor: "pointer" }}
                />
              </Box>
            </Grid>
          )) }
        </Grid>

        <ImageModal
          open={ open }
          handleClose={ closeImage }
          imageURL={ currentProject.gifs[imageIndex] }
        />
      </Paper>
    </Box>
  );
}