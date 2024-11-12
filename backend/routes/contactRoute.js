// routes/contactRoute.js

import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST route to handle contact form submissions
router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    // Create a new Contact document and save it to the database
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();

    // Respond with success if saved successfully
    res.status(201).json({ success: true, message: "Message received successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to submit message. Please try again." });
  }
});

export default router;
