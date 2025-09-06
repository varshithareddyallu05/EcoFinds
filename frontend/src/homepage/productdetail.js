import React from "react";
import "./homepage.css";

const ProductDetailPage = ({ product, onBack }) => {
  if (!product) return <p style={{ padding: "20px" }}>No product selected</p>;

  return (
    <div className="product-detail">
      <button className="back" onClick={onBack}>← Back</button>
      <div className="detail-content">
        <div className="detail-image">Large Image</div>
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="price">₹{product.price}</p>
          <p>Category: {product.category}</p>
          <p>This is a placeholder description. Add details about the product here.</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
