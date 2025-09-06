import React, { useState, useEffect } from 'react';

const AddNewProductPage = ({ onBack, productToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [condition, setCondition] = useState('');
  const [brand, setBrand] = useState('');
  const [originalPackaging, setOriginalPackaging] = useState(false);

  const isEditing = !!productToEdit;

  useEffect(() => {
    if (isEditing) {
      setTitle(productToEdit.title || '');
      setDescription(productToEdit.description || '');
      setPrice(productToEdit.price || '');
      setCategory(productToEdit.category || '');
      setQuantity(productToEdit.quantity || 1);
      setCondition(productToEdit.condition || '');
      setBrand(productToEdit.brand || '');
      setOriginalPackaging(productToEdit.originalPackaging || false);
    }
  }, [productToEdit, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { title, description, price, category, quantity, condition, brand, originalPackaging };
    
    if (isEditing) {
      // In a real app, this would send a PUT request to /api/products/:id
      console.log('Updating product:', { ...productToEdit, ...productData });
      alert('Product updated!');
    } else {
      // In a real app, this would send a POST request to /api/products/
      console.log('Creating new product:', productData);
      alert('New product created!');
    }
    onBack(); // Go back to the listings page after submitting
  };

  const categories = ["Apparel", "Furniture", "Electronics", "Books", "Other"];
  const conditions = ["New", "Used - Like New", "Used - Good", "Used - Fair"];

  return (
    <div className="p-6">
      <button className="mb-4 text-blue-600 underline" onClick={onBack}>
        ← Back to My Listings
      </button>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isEditing ? 'Edit Product' : 'Add New Product'}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Product Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded-xl px-4 py-2" required />
          <textarea placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded-xl px-4 py-2" rows="4" required />
          <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="border rounded-xl px-4 py-2" required />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="border rounded-xl px-4 py-2" required>
            <option value="">Select Category</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="border rounded-xl px-4 py-2" required />
          <select value={condition} onChange={(e) => setCondition(e.target.value)} className="border rounded-xl px-4 py-2" required>
            <option value="">Select Condition</option>
            {conditions.map((cond) => <option key={cond} value={cond}>{cond}</option>)}
          </select>
          <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} className="border rounded-xl px-4 py-2" />
          <div className="flex items-center gap-2">
            <input type="checkbox" id="packaging" checked={originalPackaging} onChange={(e) => setOriginalPackaging(e.target.checked)} />
            <label htmlFor="packaging">Original Packaging Included</label>
          </div>
          <button type="button" className="w-full p-3 border rounded-xl bg-gray-100 hover:bg-gray-200">
            + Add Image (Placeholder)
          </button>
          <button type="submit" className="w-full p-3 bg-green-600 text-white rounded-xl hover:bg-green-700">
            {isEditing ? 'Save Changes' : 'Submit Listing'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewProductPage;