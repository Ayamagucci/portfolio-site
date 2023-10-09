require('dotenv').config();
const { DB_NAME } = process.env;
const mongoose = require('mongoose');

(async function() {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${ DB_NAME }`);
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${ err }`);
    process.exit(1);
  }
})();

module.exports = mongoose.connection;