
import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import NoteController from '../controllers/noteController.js';

const router = express.Router();

router.post("/notes", upload.single('file'), NoteController.createNote);

export default router;
