import React from "react";
import ProductCard from "./productcard";
import "./homepage.css";

const sampleProducts = [
  { id: 1, title: "Smartphone", price: 15000, category: "Electronics",image: "frontend/public/images/phone .jpg" },
  { id: 2, title: "Sofa", price: 25000, category: "Furniture",image: "frontend/public/images/sofa .jpg"},
  { id: 3, title: "Headphones", price: 2000, category: "Electronics", image: "./images/headphones.jpg" },
];

const HomePage = ({ onProductClick }) => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>🛍️ EcoFinds</h1>
        <input type="text" placeholder="Search products..." />
      </header>

      {/* Category Filters */}
      <div className="filters">
        <button>Electronics</button>
        <button>Furniture</button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
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
