import express from 'express';
import userController from '../controllers/userController.js'
import checkUserAuth from '../middleware/jwtAuth.js';

const router = express.Router();

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

//secure routes
router.get('/getUser', checkUserAuth, userController.getUser);
router.put('/change-password', checkUserAuth, userController.changePassword);
router.put('/change-account-details', checkUserAuth, userController.changeAccountDetails);

export default router;
