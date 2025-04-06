import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// 👇 Update DB name here
const MONGO_URI = 'mongodb://127.0.0.1:27017/welfare-portal';

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use('/api/users', userRoutes);

// ✅ MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected to welfare_portal');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });
