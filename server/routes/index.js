require('dotenv').config();
const { DB_NAME, PORT } = process.env;
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const db = require('../models/index');
const { serveIndex, serveResume } = require('../controllers/resumeController');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const dist = path.join(__dirname, '../../dist');
const public = path.join(__dirname, '../../public');

app.use(express.static(dist)); // serves index.html
app.use(express.static(public)); // serves resumé

app.get('/resume', serveResume);
app.get('/*', serveIndex); // catch-all route for SPA **

const server = app.listen(PORT, () => {
  console.log(`Server listening at PORT: ${ PORT }`);
});

server.on('error', (err) => {
  console.error(`Server startup error: ${ err }`);
  process.exit(1); // kills server to free up resources
});