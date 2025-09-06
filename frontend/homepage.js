import React from "react";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  { id: 1, title: "Smartphone", price: 15000, category: "Electronics" },
  { id: 2, title: "Sofa", price: 25000, category: "Furniture" },
  { id: 3, title: "Headphones", price: 2000, category: "Electronics" },
];

const HomePage = ({ onProductClick }) => {
  return (
    <div className="p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🛍️ EcoFinds</h1>
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded-xl px-4 py-2 w-1/3"
        />
      </header>

      {/* Category Filters */}
      <div className="flex gap-3 mb-6">
        <button className="px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200">Electronics</button>
        <button className="px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200">Furniture</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
};


export default HomePage;
