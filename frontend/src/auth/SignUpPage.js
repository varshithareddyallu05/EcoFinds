import React, { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { darkMode } = useContext(ThemeContext);

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
      <div
        style={{
          backgroundColor: darkMode ? "#1f2937" : "white",
          padding: "2rem",
          borderRadius: "8px",
          width: "300px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>EcoFinds Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button style={buttonStyle}>Sign Up</button>
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
  backgroundColor: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

export default SignUpPage;