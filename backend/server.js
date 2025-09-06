const express = require('express');
const cors = require('cors'); // Imports cors

const app = express();
const port = 3001;

const productRoutes = require('./routes/products');

// ## MIDDLEWARE ##
app.use(cors()); // Allows your frontend to communicate with this server
app.use(express.json()); // Allows your server to understand JSON data

// ## ROUTES ## (We'll add these next)
app.use('/api/products', productRoutes);

// ## START SERVER ##
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});