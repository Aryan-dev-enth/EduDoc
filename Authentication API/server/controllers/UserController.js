import UserModel from "../models/User.js";
import bcrypt, { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer'
import transporter from "../config/emailConfig.js";
import dotenv from 'dotenv';
dotenv.config();

class UserController {

    //registration 

    static userRegistration = async (req, res) => {
        try {
            const { name, email, password, password_confirmation, tc } = req.body;

            const user = await UserModel.findOne({ email: email });
            if (user) {
                res.send({
                    "status": "failed",
                    "message": "User with this " + email + "  email address already exists !"
                });
            }
            else {
                if (name && email && password && password_confirmation && tc) {
                    if (password === password_confirmation) {
                        try {
                            const salt = await bcrypt.genSalt(12);
                            const hashPassword = await bcrypt.hash(password, salt);
                            const user = new UserModel({
                                name: name,
                                email: email,
                                password: hashPassword,
                                tc: tc
                            })
                            await user.save();

                            const savedUser = await UserModel.findOne({ email: email });
                            //Generate JWT

                            const token = jwt.sign({ userID: savedUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

                            res.status(201).send({
                                "status": "success",
                                "message": "Registered succesfully !",
                                "token": token
                            });

                        } catch (error) {
                            res.send({
                                "status": "failed",
                                "message": error.message
                            });
                        }
                    }
                    else {
                        res.send({
                            "status": "failed",
                            "message": "Password and Confirm Password doesn't match"
                        });
                    }
                }
                else {
                    res.send({
                        "status": "failed",
                        "message": "All fields required"
                    });
                }
            }
        } catch (error) {
            res.send({
                "status": "failed",
                "message": "Registration failed"
            });
        }
    }

    //login

    static userLogin = async (req, res) => {
        try {
            const { email, password } = req.body;

            if (email && password) {
                const user = await UserModel.findOne({ email: email });
                if (!user) {
                    res.send({
                        "status": "failed",
                        "message": "User not registered"
                    });
                }
                else {


                    const isMatch = await bcrypt.compare(password, user.password);

                    if (isMatch && email === user.email) {
                        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
                        res.send({
                            "status": "sucess",
                            "message": "Logged in succesfully !",
                            "token": token
                        });
                    }
                    else {
                        res.send({
                            "status": "failed",
                            "message": "Invalid Credentials"
                        });
                    }
                }
            }
            else {
                res.send({
                    "status": "failed",
                    "message": "All fields are required"
                });
            }
        } catch (error) {
            res.send({
                "status": "failed",
                "message": error.message
            });
        }
    }

    //change Password


    static changeUserPassword = async (req, res) => {
        try {
            const { password, password_confirmation } = req.body;
            if (password && password_confirmation) {
                if (password === password_confirmation) {
                    try {
                        const salt = await bcrypt.genSalt(12);
                        const newHashPassword = await bcrypt.hash(password, salt);

                        await UserModel.findByIdAndUpdate(req.user._id, {
                            $set: {
                                password: newHashPassword
                            }
                        });

                        res.send({
                            "status": "sucess",
                            "message": "Password changed succesfully"
                        });
                    } catch (error) {
                        res.send({
                            "status": "failed",
                            "message": error.message
                        });
                    }
                }
                else {
                    res.send({
                        "status": "failed",
                        "message": "Password and Confirm Password doesn't match"
                    });
                }
            }
            else {
                res.send({
                    "status": "failed",
                    "message": "All fields are required"
                });
            }
        } catch (error) {
            res.send({
                "status": "failed",
                "message": error.message
            });
        }
    }

    //get user detail
    static loggedUser = async (req, res) => {
        res.send(req.user);
    }

    //send an email link to reset password 

    static sendUserPassword = async (req, res) => {
        try {
            const { email } = req.body;
            if (email) {
                const user = await UserModel.findOne({ email: email });
                const secret = user._id + process.env.JWT_SECRET_KEY;

                if (user) {
                    try {
                        const token = jwt.sign({ userID: user._id }, secret, { expiresIn: "15m" });
                        const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
                        console.log(user);

                        const info = await transporter.sendMail({
                            from: process.env.EMAIL_FROM,
                            to: user.email, // list of receivers
                            subject: "Password Reset Link", 
                            html: `<a href="${link}" >Click here to reset your password</a>`, // html body
                          });

                        res.send({
                            "status": "success",
                            "message": "Email sent succesfully",
                            "info":info
                        })
                    } catch (error) {
                        console.log(error);
                        res.send({
                            "status": "failed",
                            "message": error.message
                        })
                    }
                }
                else {
                    res.send({
                        "status": "failed",
                        "message": "User doesn't exist"
                    })
                }
            }
            else {
                res.send({
                    "status": "failed",
                    "message": "All fields are required"
                })
            }
        } catch (error) {
            res.send({
                "status": "failed",
                "message": error.message
            })
        }
    }

    //reset password using the link sent to mail

    static userPasswordReset = async (req, res) => {
        try {

            const { password, password_confirmation } = req.body;
            const { id, token } = req.params;

            const user = await User.findById(id);

            const new_token = user._id + process.env.JWT_SECRET_KEY;
            try {
                jwt.verify(token,new_token);
                if(password && password_confirmation)
                {
                    if(password === password_confirmation)
                    {
                        const salt =await bcrypt.genSalt(12);
                        const newHashPassword=await bcrypt.hash(password,salt);
                        await UserModel.findByIdAndUpdate(req.user._id,{
                            $set:{
                                password:newHashPassword
                            }
                        });
                    }
                    else
                    {
                        res.send({
                            "status": "failed",
                            "message": "Password and Confirm password doesn't match"
                        })
                    }
                }
                else
                {
                    res.send({
                        "status": "failed",
                        "message": "All fields are required"
                    })
                }

            } catch (error) {
                res.send({
                    "status": "failed",
                    "message": error.message
                })
            }
        } catch (error) {
            res.send({
                "status": "failed",
                "message": error.message
            })
        }


    }
}

export default UserController;