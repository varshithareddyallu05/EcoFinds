import React from "react";

const ProductDetailPage = ({ product, onBack }) => {
  if (!product) return <p className="p-6">No product selected</p>;

  return (
    <div className="p-6">
      <button className="mb-4 text-blue-600 underline" onClick={onBack}>
        ← Back
      </button>

      <div className="grid grid-cols-2 gap-8">
        {/* Image */}
        <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">Large Image</span>
        </div>

        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-xl text-green-600 mb-4">₹{product.price}</p>
          <p className="text-gray-500 mb-6">Category: {product.category}</p>
          <p className="mb-6">
            This is a placeholder description. Add details about the product here.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
