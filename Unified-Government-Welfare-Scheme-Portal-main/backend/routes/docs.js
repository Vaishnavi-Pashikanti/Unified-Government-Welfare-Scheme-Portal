import express from 'express';
import { uploadDoc, verifyDoc } from '../controllers/docController.js';
import multer from 'multer';

const upload = multer({ storage: supabaseStorage });
const router = express.Router();

router.post('/upload', auth, upload.single('doc'), uploadDoc);
router.post('/verify/:docId', auth, verifyDoc);

export default router;
