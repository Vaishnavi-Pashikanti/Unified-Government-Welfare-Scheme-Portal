import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  scheme: { type: mongoose.Schema.Types.ObjectId, ref: 'Scheme' },
  status: { type: String, enum: ['pending', 'approved', 'rejected'] }
}, { timestamps: true });

export default mongoose.model('Application', applicationSchema);
