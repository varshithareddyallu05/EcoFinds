import React from "react";
import ProductCard from "./productcard";
// Make sure you import your team's CSS file if it's not already imported in App.js
import "./homepage.css"; 

// Using the same sample data from before
const sampleProducts = [
  { id: 1, title: "Smartphone", price: 15000, image: "https://via.placeholder.com/300" },
  { id: 2, title: "Sofa", price: 25000, image: "https://via.placeholder.com/300" },
  { id: 3, title: "Headphones", price: 2000, image: "https://via.placeholder.com/300" },
];

const HomePage = () => {
  return (
    <div>
      {/* The header is likely in your main App.js, but if not, it would go here */}
      
      <div className="filters">
        <button>Electronics</button>
        <button>Furniture</button>
      </div>

      <div className="product-grid">
        {sampleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;