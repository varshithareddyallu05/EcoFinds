const express = require('express');
const cors = require('cors'); // Import cors

const app = express();
const port = 3001;

// ## MIDDLEWARE ##
// This section adds essential tools to your server
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Allow server to accept incoming JSON data

// ## ROUTES ##
// Your API endpoints will go here
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is configured and running! 🚀' });
});

// ## START SERVER ##
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});