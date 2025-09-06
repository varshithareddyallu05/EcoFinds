import React, { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(''); // ---- NEW: For user feedback ----
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // ---- NEW: Function to handle form submission ----
  const handleLogin = async (event) => {
    event.preventDefault(); // Stop the form from refreshing the page
    setMessage('Logging in...');

    const loginData = { email, password };

    try {
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        // In a real app, you would save the token: localStorage.setItem('token', result.token);
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  const inputStyle = {
    width: "100%", padding: "0.5rem", marginBottom: "1rem", borderRadius: "4px", border: "1px solid #ccc"
  };

  const buttonStyle = {
    width: "100%", padding: "0.5rem", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "4px", cursor: "pointer"
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#111827" : "#f3f4f6",
        minHeight: "100vh",
        display: "flex", justifyContent: "center", alignItems: "center",
        color: darkMode ? "#f3f4f6" : "#111827"
      }}
    >
      <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{ padding: "0.5rem", backgroundColor: darkMode ? "#f3f4f6" : "#1f2937", color: darkMode ? "#1f2937" : "#f3f4f6", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div
        style={{
          backgroundColor: darkMode ? "#1f2937" : "white",
          padding: "2rem", borderRadius: "8px", width: "300px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>EcoFinds Login</h2>
        
        {/* ---- UPDATED: Wrapped in a form ---- */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          <button
            type="button" // Important: type="button" so it doesn't submit the form
            onClick={() => setShowPassword(!showPassword)}
            style={{ marginBottom: "1rem", background: "none", border: "none", color: "#3b82f6", cursor: "pointer", fontSize: "0.9rem" }}
          >
            {showPassword ? "🙈 Hide Password" : "👁️ Show Password"}
          </button>
          
          {/* ---- UPDATED: Button type is now "submit" ---- */}
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        
        {/* ---- NEW: Display feedback messages ---- */}
        {message && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{message}</p>}
        
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;