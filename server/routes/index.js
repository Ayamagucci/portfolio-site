require('dotenv').config();
const { DB_NAME, PORT } = process.env;
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { serveIndex, serveResume } = require('../controllers/resumeController');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../..', 'dist'))); // serves static assets & acts as fallback

app.get('/resume', serveResume); // NOTE: not working! **
app.get('/*', serveIndex); // catch-all route for SPA **

const server = app.listen(PORT, () => {
  console.log(`Server listening at PORT: ${ PORT }`);
});

server.on('error', (err) => {
  console.error(`Server startup error: ${ err }`);
  process.exit(1); // kills server to free up resources
});