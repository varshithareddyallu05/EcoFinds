import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import ThemeToggle from "../ThemeToggle";

function UserDashboard() {
  const { darkMode } = useContext(ThemeContext);
  const [editMode, setEditMode] = useState(false);

  const [user, setUser] = useState({
    name: "Abhinav V",
    email: "abhinavv0516@gmail.com",
    phone: "+91 98765 43210",
    dob: "2005-05-16",
    location: "Bengaluru, India",
    bio: "Full-stack dev exploring MERN and drone tech."
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const containerStyle = {
    backgroundColor: darkMode ? "#0d1117" : "#f3f4f6",
    color: darkMode ? "#c9d1d9" : "#111827",
    minHeight: "100vh",
    padding: "2rem",
    position: "relative"
  };

  const cardStyle = {
    backgroundColor: darkMode ? "#161b22" : "#ffffff",
    padding: "2rem",
    borderRadius: "12px",
    maxWidth: "500px",
    margin: "5rem auto 2rem",
    boxShadow: darkMode ? "none" : "0 2px 8px rgba(0,0,0,0.05)",
    border: darkMode ? "1px solid #30363d" : "1px solid #e5e7eb",
    textAlign: "center"
  };

  const avatarStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem"
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "0.95rem"
  };

  const buttonStyle = {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "500",
    cursor: "pointer"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    maxWidth: "500px",
    margin: "0 auto"
  };

  const optionCard = {
    backgroundColor: darkMode ? "#1f2937" : "#f9fafb",
    padding: "1rem",
    borderRadius: "8px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: darkMode ? "none" : "0 1px 4px rgba(0,0,0,0.05)",
    fontWeight: "500"
  };

  return (
    <div style={containerStyle}>
      <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
        <ThemeToggle />
      </div>

      <div style={cardStyle}>
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          style={avatarStyle}
        />

        {editMode ? (
          <>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="date"
              name="dob"
              value={user.dob}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="text"
              name="location"
              value={user.location}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              style={{ ...inputStyle, height: "80px" }}
            />
          </>
        ) : (
          <>
            <h2 style={{ marginBottom: "0.5rem" }}>{user.name}</h2>
            <p style={{ marginBottom: "0.25rem" }}>{user.email}</p>
            <p style={{ marginBottom: "0.25rem" }}>{user.phone}</p>
            <p style={{ marginBottom: "0.25rem" }}>{user.location}</p>
            <p style={{ marginBottom: "0.25rem" }}>{user.bio}</p>
          </>
        )}

        <button onClick={() => setEditMode(!editMode)} style={buttonStyle}>
          {editMode ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      <div style={gridStyle}>
        <div style={optionCard}>🧾 My Orders</div>
        <div style={optionCard}>👤 Manage Account</div>
        <div style={optionCard}>📦 Saved Items</div>
        <div style={optionCard}>📞 Help & Support</div>
      </div>
    </div>
  );
}

export default UserDashboard;