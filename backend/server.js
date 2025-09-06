const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // This loads your .env file

// Create the app
const app = express();
const port = 3001;

// ## DATABASE CONNECTION ##
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// ## MIDDLEWARE ##
app.use(cors());
app.use(express.json());

// ## IMPORT ROUTE FILES ##
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

// ## USE ROUTES ##
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// ## START SERVER ##
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});