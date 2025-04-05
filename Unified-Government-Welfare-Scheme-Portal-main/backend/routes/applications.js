import express from 'express';
import { applyForScheme, getApplications, updateApplicationStatus } from '../controllers/appController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, applyForScheme);
router.get('/', auth, getApplications);
router.put('/:appId', auth, updateApplicationStatus);

export default router;
