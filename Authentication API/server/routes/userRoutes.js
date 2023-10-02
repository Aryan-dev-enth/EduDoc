import express from 'express';
const router =express.Router();
import UserController from '../controllers/UserController.js';
import checkUserAuth from '../middlewares/jwtAuthentication.js'

//public routes

router.post("/register",UserController.userRegistration);
router.post("/login",UserController.userLogin);
router.post("/send-reset-password-email",UserController.sendUserPassword);
router.post("/reset/:id/:token",UserController.userPasswordReset)




//protected routes
router.get("/getUser",checkUserAuth,UserController.loggedUser);
router.post("/changePassword",checkUserAuth,UserController.changeUserPassword);

export default router;