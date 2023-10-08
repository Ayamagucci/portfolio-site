import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import skills from '../bio/skills';

export default function About({ centerStyle }) {

  return (
    <Box id="about" sx={{ ...centerStyle, marginY: "17.5rem" }}>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: "2.5rem"
        }}
      >
        <Typography variant="h2">
          About Me:
        </Typography>
      </Box>

      <Paper elevation={ 3 }>
        <Box sx={{ margin: "1.5rem" }}>
          <Typography variant="body1">
            My journey into tech began during my undergraduate years when my strong fascination with the industry led me to independently explore JavaScript in my free time. This early curiosity ultimately set the stage for my transition into software development. Since then, I've continued to master the craft by adopting best practices and staying current with developments in the field. Notable strides include:
          </Typography>
          <br /><br />

          { skills.titles.map((title, i) => (
            <Box component="ul" key={ i }>
              <Typography component="li" variant="body1">
                <strong>{ title }:</strong> { skills.descriptions[i] }
              </Typography>
            </Box>
          )) }
          <br /><br />

          <Typography variant="body1">
            Beyond technical expertise, my background as a prospective physician has honed my logical and reasoning capabilities, which I now apply to devise creative solutions for intricate coding challenges. My achievements as a Summa Cum Laude graduate and my top 5% nationwide ranking in the "Critical Analysis and Reasoning Skills" section of the MCAT serve as testaments to my unwavering work ethic and intellectual capacity. Moreover, I have consistently demonstrated strong interpersonal skills and documentation ability, refined during my tenure as a medical scribe on multiple care teams. This experience has enabled me to seamlessly integrate into diverse team dynamics, a skill set indispensable for any capable engineer.
          </Typography>
          <br /><br />

          <Typography variant="body1">
            But I'm not all business—I'm also a fun-loving, charismatic team player who knows how to keep things light. After all, life’s too short to spend your working hours around people you don’t enjoy, so why not make your workspace a little brighter?
          </Typography>
          <br /><br />

          <Typography variant="body1">
            My lifelong fascination with tech, coupled with the influence of knowledgeable friends & colleagues, motivated me to pursue a career in development. My academic achievements, problem-solving abilities, & interpersonal strengths make me a valuable asset to any team. I am excited to contribute my skills, work ethic, & enthusiasm for innovation to an organization that strives for excellence in producing meaningful & impactful technology for the world.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}