import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  phone: { type: String, unique: true },
  aadhaar: { type: String, unique: true, sparse: true },
  publicKey: String,
  eligibility: {
    age: Number,
    income: Number,
    occupation: String
  },
  documents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Document' }]
}, { timestamps: true });

export default mongoose.model('User', userSchema);
