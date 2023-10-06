import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Typography } from '@mui/material';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {

  return (
    <Container maxWidth="xl">
      <Typography variant="h1">
        Hi, I'm Alex!
      </Typography>

      <Nav />
      <Box sx={{ overflow: 'hidden', maxHeight: '80vh', padding: '2rem' }}>
        <About />
        <Contact />
        <Projects />

        {/* <Typography variant="subtitle1">
          Dual-passionate explorer transitioning from medicine to code, merging medical insights with tech innovation.
        </Typography>
        <br /><br />

        <Typography variant="body1">
          My journey in medicine was marked by various academic achievements, including graduation Summa Cum Laude & achieving a top score on the MCAT — particularly in the “Critical Thinking & Reasoning Skills” section where I ranked in the top 5% of all test-takers worldwide.
        </Typography>

        <br /><br />

        <Typography variant="body1">
          While my passion for medicine initially guided me, introspection has led me to embrace a new path in the tech industry. As I embark on this exciting journey, I remain committed to lifelong learning & leveraging my scientific background to excel in the dynamic & ever-evolving world of technology.
        </Typography> */}
      </Box>

    </Container>
  );
}