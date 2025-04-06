import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: { type: String, required: true, unique: true },
  email: String,
  phone: String,
  age: Number,
  gender: String,
  city: String,
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);

