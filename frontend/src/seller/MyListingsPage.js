import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg p-4 flex flex-col text-white transform hover:scale-105 transition-transform duration-300">
      <div className="w-full h-48 bg-slate-700 rounded-md mb-4 flex items-center justify-center">
        <span className="text-slate-400">Image</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
      <p className="text-lg text-teal-400 font-semibold mb-3">₹{product.price}</p>
      <p className="text-sm text-slate-400 mb-4 flex-grow">Condition: {product.condition}</p>
      <div className="flex gap-2 mt-auto">
        <button onClick={() => onEdit(product)} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold">
          Edit
        </button>
        <button onClick={() => onDelete(product.id)} className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-semibold">
          Delete
        </button>
      </div>
    </div>
  );
};

const MyListingsPage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error("Failed to fetch listings:", err));
  }, []);

  const handleDelete = (productId) => {
    fetch(`http://localhost:3001/api/products/${productId}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(result => {
        console.log(result.message);
        setListings(listings.filter(p => p.id !== productId));
      });
  };

  const handleEdit = (product) => {
    console.log("Should navigate to edit page for:", product);
    alert(`Editing ${product.title}`);
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-teal-400">My Listings</h1>
        <Link to="/add-product" className="bg-teal-500 text-slate-900 px-6 py-2 rounded-lg hover:bg-teal-400 font-bold transition-colors">
          + Add New Product
        </Link>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((product) => (
          <ListingCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyListingsPage;