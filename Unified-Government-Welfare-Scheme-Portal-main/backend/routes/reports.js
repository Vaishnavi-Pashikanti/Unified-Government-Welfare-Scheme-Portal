import express from 'express';
import { getApplicationStats, getSchemePopularity } from '../controllers/reportController.js';
import { adminAuth } from '../middleware/adminAuth.js';

const router = express.Router();

router.get('/application-stats', adminAuth, getApplicationStats);
router.get('/scheme-popularity', adminAuth, getSchemePopularity);

export default router;
