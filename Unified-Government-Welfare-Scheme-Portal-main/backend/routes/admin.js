import express from 'express';
import { loginAdmin, getAllSchemes, approveApplication } from '../controllers/adminController.js';
import { adminAuth } from '../middleware/adminAuth.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.get('/schemes', adminAuth, getAllSchemes);
router.put('/applications/:appId/approve', adminAuth, approveApplication);

export default router;
