// routes/registerRoute.js

import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { email, username, password, passwordConf } = req.body;

  try {
    // Check if all required fields are provided
    if (!email || !username || !password || !passwordConf) {
      throw new Error("Please fill out all fields.");
    }

    // Check if password matches password confirmation
    if (password !== passwordConf) {
      throw new Error("Passwords do not match.");
    }

    // Check if email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("Email is already in use.");
    }

    // Create a new user
    const newUser = new User({
      email,
      username,
      password,
      passwordConf
    });

    // Save the new user to the database
    await newUser.save();

    res.status(200).json({ success: true, message: "You are registered, you can login now." });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
