const path = require('path');
const Download = require('../models/Download');

exports.serveIndex = async function(req, res) {
  try {
    const filePath = path.join(__dirname, '../../dist', 'index.html');
    // console.log(`filePath: ${ filePath }`); // confirmed correct path **

    await res.sendFile(filePath);
    res.status(200).end();

  } catch(err) {
    res.status(500).send(`Error serving "index.html": ${ err }`);
  }
};

exports.serveResume = async function(req, res) {
  try {
    // NOTE: not working! **
    // await Download.findOneAndUpdate({}, { $inc: { downloads: 1 } }, { upsert: true });

    const filePath = path.join(__dirname, '../../public', 'RESUME.pdf');
    // console.log(`filePath: ${ filePath }`); // confirmed correct path

    res.download(filePath, 'RESUME.pdf', (err) => {
      if (err) {
        console.error(`Error downloading resumé: ${ err }`);
        res.status(500).send(`Error downloading resumé: ${ err }`);
      }
    });

  } catch(err) {
    res.status(500).send(`Error serving resumé: ${ err }`);
  }
};