import React from "react";
import "./homepage.css";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="image"><img src={product.image} alt=""></img></div>
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
