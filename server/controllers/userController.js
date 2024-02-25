import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

class userController {
  static async createUser(req, res) {
    try {
      const { username, email, password, fullName, avatarUrl, bio } = req.body;

      // Validate required fields
      if (!username || !email || !password) {
        return res.status(400).json({
          status: false,
          message: "Username, email, and password are required",
        });
      }

      // Check if the user or email already exists
      const existingUser = await User.findOne({
        $or: [{ email }, { username }],
      });
      if (existingUser) {
        return res.status(409).json({
          status: false,
          message: "User or email already exists",
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        profile: { fullName, avatarUrl, bio },
      });

      // Save the new user
      const savedUser = await newUser.save();

      // Generate JWT token
      const token = jwt.sign(
        { userId: savedUser._id, role: savedUser.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.status(201).json({
        status: true,
        message: "Registered successfully",
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;

      // Validate required fields
      if (!email || !password) {
        return res.status(400).json({
          status: false,
          message: "Email and password are required",
        });
      }

      // Find the user by email
      const user = await User.findOne({ email });

      // Check if user exists
      if (!user) {
        return res.status(404).json({
          status: false,
          message: "User not found",
        });
      }

      // Validate the password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({
          status: false,
          message: "Invalid password",
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        status: true,
        message: "Login successful",
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  }

  static getUser = async (req, res) => {
    try {
      res.status(200).json({ status: true, user: req.user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  };

  static changePassword = async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body;

      // Validate if both currentPassword and newPassword are provided
      if (!currentPassword || !newPassword) {
        return res.status(400).json({
          status: false,
          message: "Both currentPassword and newPassword are required!",
        });
      }

      // Validate the current password
      const isPasswordValid = await bcrypt.compare(
        currentPassword,
        req.user.password
      );

      if (!isPasswordValid) {
        return res.status(401).json({
          status: false,
          message: "Current password is incorrect",
        });
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update the user's password with the hashed new password
      req.user.password = hashedPassword;
      await req.user.save();

      res.status(200).json({
        status: true,
        message: "Password changed successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: false,
        message: "Internal Server Error",
      });
    }
  };

  static changeAccountDetails = async (req, res) => {
    try {
      const { fullName, avatarUrl, bio } = req.body;

      // Validate if any of the fields are provided
      if (!fullName && !avatarUrl && !bio) {
        return res.status(400).json({
          status: false,
          message: "At least one field (fullName, avatarUrl, bio) is required for account details update"
        });
      }

      // Update user profile if provided
      if (fullName) req.user.profile.fullName = fullName;
      if (avatarUrl) req.user.profile.avatarUrl = avatarUrl;
      if (bio) req.user.profile.bio = bio;

      await req.user.save();

      res.status(200).json({
        status: true,
        message: "Account details changed successfully",
      });
    } catch (error) {
      console.error(error);

      // Check if it's a validation error
      if (error.name === 'ValidationError') {
        return res.status(400).json({
          status: false,
          message: 'Validation Error. Please provide valid data for account details update.',
          errors: error.errors
        });
      }

      res.status(500).json({
        status: false,
        message: "Internal Server Error"
      });
    }
  };
}

export default userController;
