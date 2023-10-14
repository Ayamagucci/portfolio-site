const path = require('path');
const Download = require('../models/Download');

exports.serveIndex = async function(req, res) {
  try {
    await res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
    res.status(200).end();
  } catch(err) {
    console.error(`Error serving index file: ${ err }`);
    res.status(500).send(`Error serving index file: ${ err }`);
  }
};

exports.serveResume = async function(req, res) {
  try {
    const timestamp = new Date();

    // increm downloads & add corresponding timestamp
    await Download.findOneAndUpdate({}, {
      $inc: { downloads: 1 },
      $push: { timestamps: timestamp }

    }, { upsert: true });

    const filePath = path.join(__dirname, '../../public', 'RESUME.pdf');

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