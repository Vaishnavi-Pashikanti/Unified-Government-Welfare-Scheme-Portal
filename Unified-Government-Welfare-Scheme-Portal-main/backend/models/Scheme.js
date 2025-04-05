const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  name: String,
  description: String,
  eligibility: {
    minAge: Number,
    maxIncome: Number,
    occupation: String,
    gender: String,
    state: String,
    disability: String
  },
  benefits: String,
  requiredDocuments: [String],
  category: String,
  schemeAuthority: String
});

module.exports = mongoose.model('Scheme', schemeSchema);
