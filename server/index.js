require('dotenv').config();
const { PORT } = process.env;
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => {
  console.log(`Server listening at PORT: ${ PORT }`);
});