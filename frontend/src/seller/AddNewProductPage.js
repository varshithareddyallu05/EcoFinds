import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewProductPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { title, description, price, category, condition };

    fetch('http://localhost:3001/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    })
    .then(res => res.json())
    .then(result => {
      alert(result.message);
      navigate('/my-listings');
    })
    .catch(err => console.error("Failed to submit product:", err));
  };

  const categories = ["Apparel", "Furniture", "Electronics", "Books", "Other"];
  const conditions = ["New", "Used - Like New", "Used - Good", "Used - Fair"];

  return (
    <div className="page-container">
      <div className="form-wrapper">
        <h2 className="form-title">
          Add a New Product
        </h2>
        <form onSubmit={handleSubmit} className="form-layout">
          <input type="text" placeholder="Product Title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-input" required />
          <textarea placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-textarea" required />
          <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-input" required />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select" required>
            <option value="">Select Category</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <select value={condition} onChange={(e) => setCondition(e.target.value)} className="form-select" required>
            <option value="">Select Condition</option>
            {conditions.map((cond) => <option key={cond} value={cond}>{cond}</option>)}
          </select>
          <button type="submit" className="btn btn-primary">
            Submit Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewProductPage;