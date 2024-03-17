import express from 'express';
const router = express.Router();
import NoteController from '../controllers/noteController.js';

router.post("/notes", NoteController.createNote);


export default router;
