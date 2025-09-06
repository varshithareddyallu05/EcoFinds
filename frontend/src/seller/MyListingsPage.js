import React from 'react';

// This is sample data. Later, this will come from the backend API.
const userListings = [
  {
    id: 1,
    title: 'Vintage Leather Jacket',
    price: 85.00,
    category: 'Apparel',
    description: 'A cool vintage jacket from the 80s.',
    condition: 'Used - Good',
    brand: 'Retro Wear',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    title: 'Old Record Player',
    price: 120.00,
    category: 'Electronics',
    description: 'A classic record player that still works perfectly.',
    condition: 'Used - Fair',
    brand: 'AudioPhile',
    image: 'https://via.placeholder.com/150'
  }
];

// Reusable card for showing a single listing
const ListingCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col">
      <div className="w-full h-40 bg-gray-200 rounded-xl mb-3">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-xl" />
      </div>
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <p className="text-sm text-gray-500 mt-1">Condition: {product.condition}</p>
      <div className="flex gap-2 mt-4">
        <button onClick={() => onEdit(product)} className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Edit
        </button>
        <button onClick={() => onDelete(product.id)} className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};


const MyListingsPage = ({ onAddNew, onEdit }) => {
  const handleDelete = (productId) => {
    // In a real app, this would make an API call to the backend
    console.log(`Request to delete product with ID: ${productId}`);
    alert(`Product ${productId} would be deleted.`);
  };

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Listings</h1>
        <button onClick={onAddNew} className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600">
          + Add New Product
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userListings.map((product) => (
          <ListingCard
            key={product.id}
            product={product}
            onEdit={onEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyListingsPage;