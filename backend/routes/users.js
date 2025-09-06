const express = require('express');
const router = express.Router();

// POST /api/users/register
// This route handles new user registration.
router.post('/register', (req, res) => {
  // In a real app, you'd save the user to a database.
  // For now, we'll log the data from the frontend form.
  console.log('Register request body:', req.body);
  res.json({ message: 'User registered successfully!' });
});

// POST /api/users/login
// This route handles user login.
router.post('/login', (req, res) => {
  console.log('Login request body:', req.body);
  // Send back a success message and a fake token for the frontend to use.
  res.json({ message: 'User logged in successfully!', token: 'fake-jwt-token' });
});

module.exports = router;