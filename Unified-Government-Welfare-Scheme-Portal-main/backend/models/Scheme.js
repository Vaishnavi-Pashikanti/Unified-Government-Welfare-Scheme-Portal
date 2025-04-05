const schemeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    eligibility: {
      age: { min: Number, max: Number },
      income: { max: Number },
      occupation: [String]
    },
    requiredDocs: [String],
    benefits: [String]
  });
  
  export default mongoose.model('Scheme', schemeSchema);
  