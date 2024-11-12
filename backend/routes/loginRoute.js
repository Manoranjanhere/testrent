// routes/loginRoute.js

import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find the user with the provided email
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("This email is not registered!");
    }

    // Check if the password matches
    if (user.password !== password) {
      throw new Error("Wrong password!");
    }

    // Login successful
    res.status(200).json({ success: true, message: "Success!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
