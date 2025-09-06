const express = require('express');
const router = express.Router();

const dummyUser = {
    id: 'user123',
    username: 'EcoWarrior',
    email: 'test@example.com'
};

// POST /api/users/register
router.post('/register', (req, res) => {
  console.log('Register request body:', req.body);
  res.status(201).json({ message: 'User registered successfully!' });
});

// POST /api/users/login
router.post('/login', (req, res) => {
  console.log('Login request body:', req.body);
  res.json({ message: 'User logged in successfully!', token: 'fake-jwt-token-for-hackathon' });
});

// GET /api/users/me - Get the current user's profile
router.get('/me', (req, res) => {
    console.log("GET request for current user's profile");
    res.json(dummyUser);
});

// PUT /api/users/me - Update the current user's profile
router.put('/me', (req, res) => {
    console.log("PUT request to update user's profile with data:", req.body);
    res.json({ message: 'Profile updated successfully!', data: req.body });
});


module.exports = router;