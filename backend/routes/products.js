const express = require('express');
const router = express.Router();

// Temporary data for the hackathon
const dummyProducts = [
  { id: 1, title: 'Vintage Leather Jacket', price: 85.00 },
  { id: 2, title: 'Wooden Bookshelf', price: 50.00 }
];

// GET request to /api/products/
router.get('/', (req, res) => {
  res.json(dummyProducts);
});

module.exports = router;