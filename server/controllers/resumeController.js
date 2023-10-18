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

    // check if doc exists before updating
    const download = await Download.findOne();

    if (download) {
      // increm downloads & add corresponding timestamp
      download.downloads++;
      download.timestamps.push(timestamp);
      await download.save();

    } else {
      const newDownload = new Download({
        downloads: 1,
        timestamps: [ timestamp ]
      });
      await newDownload.save();
    }

    /*
    await Download.findOneAndUpdate({}, {
      $inc: { downloads: 1 },
      $push: { timestamps: timestamp }

    }, { upsert: true });
    */

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