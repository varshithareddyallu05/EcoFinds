const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// POST /api/users/register - Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user instance
    user = new User({
      username,
      email,
      password
    });

    // Save the user to the database (password will be hashed by the schema)
    await user.save();
    
    // For now, just send a success message
    res.status(201).json({ message: 'User registered successfully!' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// POST /api/users/login (We can add real logic here later)
router.post('/login', (req, res) => {
  console.log('Login request body:', req.body);
  res.json({ message: 'User logged in successfully!', token: 'fake-jwt-token-for-hackathon' });
});


module.exports = router;