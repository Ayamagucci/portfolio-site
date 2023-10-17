import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import DownScroll from '../DownScroll';
// import About from '../About';
import skills from '../../data/skills';

export default function Bio({ centerStyle }) {

  return (
    <Container id='bio'>
      <Box sx={ centerStyle }>
        <Box
          sx={{ mb: '1.5rem', display: 'flex' }}
          alignItems='center'
          justifyContent='center'
        >
          <Typography variant='h2' color='textPrimary'>
            About Me:
          </Typography>
        </Box>

        <Paper elevation={ 3 }>
          <Box sx={{ p: 2 }}>
            <Typography variant='body1'>
              My journey into tech began during my undergraduate years when my strong fascination with the industry led me to independently explore JavaScript in my free time. This early curiosity ultimately set the stage for my transition into software development. Since then, I've continued to master the craft by adopting best practices and staying current with developments in the field. Notable strides include:
            </Typography>
            <br /><br />

            { skills.titles.map((title, i) => (
              <Box component='ul' key={ i }>
                <Typography component='li' variant='body1'>
                  <strong>{ title }:</strong> { skills.descriptions[i] }
                </Typography>
              </Box>
            )) }
            <br /><br />

            <Typography variant='body1'>
              While my path into software may differ from the conventional route, it has endowed me with a unique skill set that could prove invaluable to cross-functional teams. My previous journey as a prospective physician greatly honed my logical reasoning skills, enabling me to offer fresh insights and approach problems from innovative angles. My achievements as a Summa Cum Laude graduate & my top 5% nationwide ranking in the "Critical Analysis & Reasoning Skills" section of the MCAT serve as testaments to my unwavering work ethic & logical capacity — attributes that seamlessly transition into the realm of software engineering.
              <br /><br />

              But I'm not all business — I'm also a fun-loving, charismatic team player who knows how to keep things light. After all, life’s too short to spend your working hours around people you hate, so why not make your workspace a little brighter?
              <br /><br />

              My lifelong fascination with tech, coupled with the influence of knowledgeable friends & colleagues, inspired me to pursue a career in development. My academic achievements, problem-solving abilities, & interpersonal strengths make me a valuable asset. I'm confident that my unwavering commitment to personal growth, combined with my unique background, will not only bring immediate value to any team but also pay significant dividends in the long run. I am excited to contribute my skills, work ethic, & passion for innovation to an organization that strives for excellence in producing meaningful & impactful technology for the world.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}