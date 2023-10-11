const path = require('path');
const Download = require('../models/Download');

exports.serveIndex = async function(req, res) {
  try {
    await res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
    res.status(200).end();
  } catch(err) {
    res.status(500).send(`Error serving "index.html": ${ err }`);
  }
};

exports.serveResume = async function(req, res) {
  try {
    // NOTE: not working! **
    // await Download.findOneAndUpdate({}, { $inc: { downloads: 1 } }, { upsert: true });

    // const filePath = path.join(__dirname, '../..', 'RESUME.pdf');
    // await res.download(filePath);

    const filePath = path.join(__dirname, '../../public', 'RESUME.pdf');
    await res.sendFile(filePath);

    console.log(`filePath: ${ filePath }`);

    res.status(200).end();

  } catch(err) {
    res.status(500).send(`Error serving resumé: ${ err }`);
  }
};