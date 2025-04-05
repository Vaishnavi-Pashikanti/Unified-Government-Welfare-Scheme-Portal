import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['superadmin', 'moderator'] }
}, { timestamps: true });

export default mongoose.model('Admin', adminSchema);
