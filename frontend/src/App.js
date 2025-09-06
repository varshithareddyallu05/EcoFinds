import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your page components
import HomePage from './homepage/homepage';
import AddNewProductPage from './seller/AddNewProductPage';
import MyListingsPage from './seller/MyListingsPage';
import ProductDetailPage from './homepage/productdetail';
// ---- NEW IMPORTS ----
import LoginPage from './auth/LoginPage';
import SignUpPage from './auth/SignUpPage';
import UserDashboard from './auth/UserDashboard';

// You can move your navigation to its own component later
function Navigation() {
  return (
    <nav style={{ padding: '1rem', background: '#eee', marginBottom: '1rem' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/add-product" style={{ marginRight: '1rem' }}>Sell</Link>
      <Link to="/my-listings" style={{ marginRight: '1rem' }}>My Listings</Link>
      {/* ---- NEW LINKS ---- */}
      <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
      <Link to="/signup" style={{ marginRight: '1rem' }}>Sign Up</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-product" element={<AddNewProductPage />} />
            <Route path="/my-listings" element={<MyListingsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            {/* ---- NEW ROUTES ---- */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;