import React, { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#111827" : "#f3f4f6",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: darkMode ? "#f3f4f6" : "#111827"
      }}
    >
      <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "0.5rem",
            backgroundColor: darkMode ? "#f3f4f6" : "#1f2937",
            color: darkMode ? "#1f2937" : "#f3f4f6",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div
        style={{
          backgroundColor: darkMode ? "#1f2937" : "white",
          padding: "2rem",
          borderRadius: "8px",
          width: "300px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>EcoFinds Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          style={{
            marginBottom: "1rem",
            background: "none",
            border: "none",
            color: "#3b82f6",
            cursor: "pointer",
            fontSize: "0.9rem"
          }}
        >
          {showPassword ? "🙈 Hide Password" : "👁️ Show Password"}
        </button>
        <button style={buttonStyle}>Login</button>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  marginBottom: "1rem",
  borderRadius: "4px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "0.5rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

export default LoginPage;