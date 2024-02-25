import express from 'express';
import notesController from '../controllers/notesController.js';
import checkUserAuth from '../middleware/jwtAuth.js';
import adminAuth from '../middleware/adminAuth.js';

const router = express.Router();

router.post('/create-note', checkUserAuth, notesController.createNote);
router.get('/get-verified-notes',checkUserAuth, notesController.getNotes);
router.get('/get-note/:id',checkUserAuth, notesController.getNoteById);
router.put('/update-note/:id',checkUserAuth, notesController.updateNoteById);
router.delete('/delete-note/:id',checkUserAuth, notesController.deleteNoteById);


export default router;
