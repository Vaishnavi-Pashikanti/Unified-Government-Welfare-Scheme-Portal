import express from 'express';
import { getAllSchemes, getSchemeById, createScheme, updateScheme, deleteScheme, getEligibleSchemes } from '../controllers/schemeController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllSchemes);
router.get('/:schemeId', getSchemeById);
router.post('/', auth, createScheme);
router.put('/:schemeId', auth, updateScheme);
router.delete('/:schemeId', auth, deleteScheme);
router.get('/eligible', auth, getEligibleSchemes);

export default router;
