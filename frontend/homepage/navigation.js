import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      {selectedProduct ? (
        <ProductDetailPage
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      ) : (
        <HomePage onProductClick={setSelectedProduct} />
      )}
    </div>
  );
}

export default App;