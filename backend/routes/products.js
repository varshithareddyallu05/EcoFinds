const express = require('express');
const router = express.Router();

// This is a temporary in-memory "database" for the hackathon
const dummyProducts = [
  {
    id: 1,
    title: 'Vintage Leather Jacket',
    price: 85.00,
    category: 'Apparel',
    description: 'A cool vintage jacket from the 80s.'
  },
  {
    id: 2,
    title: 'Wooden Bookshelf',
    price: 50.00,
    category: 'Furniture',
    description: 'A sturdy bookshelf with 4 shelves.'
  }
];

// GET /api/products/ - Get all products
router.get('/', (req, res) => {
  console.log('GET request for all products');
  res.json(dummyProducts);
});

// POST /api/products/ - Create a new product
router.post('/', (req, res) => {
  console.log('POST request to create a new product with data:', req.body);
  res.status(201).json({ message: 'Product created successfully!', product: req.body });
});

// GET /api/products/:id - Get a single product by its ID
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    console.log(`GET request for product with ID: ${productId}`);
    // Find the product in our dummy data or send the first one as an example
    const product = dummyProducts.find(p => p.id == productId) || dummyProducts[0];
    res.json(product);
});

// PUT /api/products/:id - Update a single product by its ID
router.put('/:id', (req, res) => {
    const productId = req.params.id;
    console.log(`PUT request to update product with ID: ${productId}`);
    console.log('Update data:', req.body);
    res.json({ message: `Product ${productId} updated successfully!`, data: req.body });
});

// DELETE /api/products/:id - Delete a single product by its ID
router.delete('/:id', (req, res) => {
    const productId = req.params.id;
    console.log(`DELETE request for product with ID: ${productId}`);
    res.json({ message: `Product ${productId} deleted successfully!` });
});


module.exports = router;