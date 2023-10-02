import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();

var checkUserAuth = async (req,res,next)=>{
    try {
        
        const auth=req.headers.authorization.trim();

        if(auth && auth.startsWith('Bearer'))
        {
            const token=auth.split(' ')[1];
            const {userID}= jwt.verify(token,process.env.JWT_SECRET_KEY);

            req.user = await UserModel.findById(userID).select('-password');
            next();
        }
        else
        {
            res.send({
                "status":"failed",
                "message":"Bearer invalid"
            })
        }

    } catch (error) {
        res.send({
            "status":"failed",
            "message":error.message
        })
    }
}

export default checkUserAuth;