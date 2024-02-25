import express from 'express';
import { Router } from 'express';
import adminController from '../controllers/adminController.js'
import adminAuth from '../middleware/adminAuth.js';
import checkUserAuth from '../middleware/jwtAuth.js';

const router = Router();

router.put('/assign-admin/:userID',checkUserAuth , adminAuth, adminController.assignAdminRole);

router.put('/approve-note/:noteID', adminAuth, adminController.approveNote);
router.put('/reject-note/:noteID', adminAuth, adminController.rejectNote);
router.get('/all-notes', adminAuth, adminController.getAllNotesForAdmin);

export default router;
