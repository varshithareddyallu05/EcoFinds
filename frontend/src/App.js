import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your page components
import HomePage from './homepage/homepage';
import AddNewProductPage from './seller/AddNewProductPage';
import MyListingsPage from './seller/MyListingsPage';
import ProductDetailPage from './homepage/productdetail';
import LoginPage from './auth/LoginPage';
import SignUpPage from './auth/SignUpPage';
import UserDashboard from './auth/UserDashboard';

// Navigation Bar Component with updated styling
function Navigation() {
  const navStyle = {
    padding: '1rem 2rem',
    backgroundColor: '#161b22', // Dark background
    marginBottom: '1rem',
    display: 'flex',
    gap: '1.5rem',
    borderBottom: '1px solid #30363d',
    alignItems: 'center',
  };

  const linkStyle = {
    color: '#c9d1d9', // Light text
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'color 0.2s ease-in-out',
  };

  const logoStyle = {
    color: '#2dd4bf', // Teal color for logo
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginRight: 'auto', // Pushes other links to the right
  };
  
  // A simple hover effect can be managed with state or just CSS, but for inline styles, we'll keep it simple.

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>EcoFinds</Link>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/add-product" style={linkStyle}>Sell</Link>
      <Link to="/my-listings" style={linkStyle}>My Listings</Link>
      <Link to="/login" style={linkStyle}>Login</Link>
      <Link to="/signup" style={linkStyle}>Sign Up</Link>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
    </nav>
  );
}

// Main App Router Component
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