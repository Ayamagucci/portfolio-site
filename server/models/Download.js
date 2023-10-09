const mongoose = require('mongoose');

const downloadSchema = new mongoose.Schema(
  {
    downloads: { type: Number, default: 0 }
  },
  { timestamps: true }
);
const Download = mongoose.model('Download', downloadSchema);

module.exports = Download;

/*
const resumeSchema = new mongoose.Schema({
  data: Buffer, // binary data for resumé file
  filename: String,
  contentType: String, // Mime type (e.g. "application/pdf")
  downloads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Download' }] // ref to Download model
});
const Resume = mongoose.model('Resume', resumeSchema);
*/