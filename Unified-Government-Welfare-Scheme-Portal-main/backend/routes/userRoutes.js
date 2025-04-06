// backend/routes/userRoutes.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    console.log("Signup request body:", req.body);
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  console.log("🔐 Login request received:", req.body);

  const { username, password } = req.body;
  
  // Ensure username is provided
  if (!username) {
    return res.status(400).json({ success: false, message: "Username is required" });
  }
try {
    const user = await User.findOne({ username }).exec(); // Use .exec() for better query handling
    console.log("User from DB:", user);

    if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    if (user.password !== password) {
        return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    console.log("✅ Login successful!");
    res.status(200).json({ success: true, message: "Login successful", user });
} catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, error: error.message });
}
});

export default router;
