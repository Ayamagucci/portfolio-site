// const express = require('express');
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
    // increm download count
    await Download.findOneAndUpdate({}, { $inc: { downloads: 1 } }, { upsert: true });

    const filePath = path.join(__dirname, '../..', 'RESUME.pdf');
    console.log(`filePath: ${ filePath }`);

    await res.sendFile(filePath);
    // await res.download(filePath);

    res.status(200).end();

  } catch(err) {
    res.status(500).send(`Error serving resumé: ${ err }`);
  }
};