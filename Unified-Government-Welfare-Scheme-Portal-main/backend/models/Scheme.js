const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  name: String,
  description: String,
  benefits: [String]
}, { timestamps: true });

module.exports = mongoose.model('Scheme', schemeSchema);
