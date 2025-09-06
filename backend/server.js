const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Import the route files
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

// ## MIDDLEWARE ##
app.use(cors());
app.use(express.json());

// ## ROUTES ##
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// ## START SERVER ##
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});