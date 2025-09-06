const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs'); // Import bcrypt

// POST /api/users/register - (This is already complete)
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// ---- NEW: Real Login Logic ----
// POST /api/users/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find the user by their email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 2. Compare the submitted password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 3. If passwords match, login is successful
    // In a real app, you'd generate a JWT token here.
    res.json({ message: 'Login successful!', token: 'fake-jwt-token-for-hackathon' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


module.exports = router;