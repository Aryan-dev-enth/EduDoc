import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import NoteController from '../controllers/noteController.js';

const router = express.Router();

router.post("/notes", upload.single('file'), NoteController.createNote);
router.get("/adminNotes", NoteController.getAllNotes); // Changed from post to get
router.get("/userNotes", NoteController.getVerifiedNotes); // Changed from post to get
router.patch("/verifyNotes/:id", NoteController.verifyNote); // Changed from post to patch and added :id in the route

export default router;
