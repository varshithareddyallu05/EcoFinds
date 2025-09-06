import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    // Use the class names from your team's CSS file
    <div className="product-card" onClick={handleCardClick}>
      {/* Your CSS uses a div with class "image" */}
      <div className="image">
        {/* You can put an <img> tag here later */}
        Image Placeholder
      </div>
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
    </div>
  );
};

export default ProductCard;

