import React, { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(''); // ---- NEW: For user feedback ----
  const { darkMode } = useContext(ThemeContext);

  // ---- NEW: Function to handle form submission ----
  const handleSignUp = async (event) => {
    event.preventDefault(); // Stop the form from refreshing the page
    setMessage('Registering...');

    const userData = { username, email, password };

    try {
      const response = await fetch('http://localhost:3001/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message); // Should be "User registered successfully!"
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Sign up error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  const inputStyle = {
    width: "100%", padding: "0.5rem", marginBottom: "1rem", borderRadius: "4px", border: "1px solid #ccc"
  };

  const buttonStyle = {
    width: "100%", padding: "0.5rem", backgroundColor: "#10b981", color: "white", border: "none", borderRadius: "4px", cursor: "pointer"
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
      <div
        style={{
          backgroundColor: darkMode ? "#1f2937" : "white",
          padding: "2rem", borderRadius: "8px", width: "300px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>EcoFinds Sign Up</h2>
        
        {/* ---- UPDATED: Wrapped in a form ---- */}
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          {/* ---- UPDATED: Button type is now "submit" ---- */}
          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>

        {/* ---- NEW: Display feedback messages ---- */}
        {message && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{message}</p>}

      </div>
    </div>
  );
}

export default SignUpPage;