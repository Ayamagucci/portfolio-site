const mongoose = require('mongoose');

const downloadSchema = new mongoose.Schema(
  {
    downloads: { type: Number, default: 0 }
  },
  { timestamps: true }
);
const Download = mongoose.model('Download', downloadSchema);

module.exports = Download;