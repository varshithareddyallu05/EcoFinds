
import React from "react";

const ProductCard = ({ product, onClick }) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center">
        <span className="text-gray-500">Image</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
