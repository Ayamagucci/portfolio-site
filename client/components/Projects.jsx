import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import projectData from '../projectData';

export default function Projects() {

  const [ projectIndex, setProjectIndex ] = useState(0);
  const [ currentGifIndex, setCurrentGifIndex ] = useState(0);

  // change project
  const nextProject = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };
  const prevProject = () => {
    setProjectIndex((prevIndex) => (prevIndex === 0) ? (2) : (prevIndex - 1));
  };
  const currentProject = projectData[projectIndex];

  // change gif
  const nextGif = () => {
    setCurrentGifIndex((prevIndex) => (prevIndex + 1) % 3);
  };
  const prevGif = () => {
    setCurrentGifIndex((prevIndex) => (prevIndex === 0) ? (2) : (prevIndex - 1));
  };

  return (
    <Box>
      <Typography variant="h3" align="center" gutterBottom>
        My Projects
      </Typography>

      <Grid container spacing={ 3 }>
        { projectData.map((project, i) => (
          <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ i }>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={ project.gifs[currentGifIndex] }
                alt={ project.title }
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  { project.title }
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  { project.description }
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  { project.year }
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Technical Skills: { project.skills }
                </Typography>

                <Box sx={{ textAlign: 'center', marginTop: '16px' }}>
                  <IconButton onClick={ prevGif }>
                    <NavigateBeforeIcon />
                  </IconButton>
                  <IconButton onClick={ nextGif }>
                    <NavigateNextIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )) }
      </Grid>
    </Box>
  );
}