import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import auth from './middleware/auth.js';
import { adminAuth } from './middleware/adminAuth.js';
import { rateLimiter } from './middleware/rateLimiter.js';

import authRoutes from './routes/auth.js';
import schemeRoutes from './routes/schemes.js';
import docRoutes from './routes/docs.js';
import appRoutes from './routes/applications.js';
import adminRoutes from './routes/admin.js';
import reportRoutes from './routes/reports.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: [process.env.CLIENT_ORIGIN, process.env.ADMIN_PANEL_ORIGIN]
}));

// Database connection
connectDB();

// Public Routes
app.use('/api/auth', rateLimiter, authRoutes);

// Protected Routes
app.use('/api/schemes', auth, schemeRoutes);
app.use('/api/docs', auth, docRoutes);
app.use('/api/applications', auth, appRoutes);

// Admin Routes
app.use('/api/admin', adminAuth, adminRoutes);
app.use('/api/reports', adminAuth, reportRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
