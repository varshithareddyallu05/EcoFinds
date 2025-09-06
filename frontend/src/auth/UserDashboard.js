import React, { useState } from "react";

function UserDashboard() {
  const [username, setUsername] = useState("your_username");
  const [email, setEmail] = useState("your_email@example.com");

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "2rem auto", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
        <div style={{ width: "60px", height: "60px", backgroundColor: "#e5e7eb", borderRadius: "50%", marginRight: "1rem" }}></div>
        <div>
          <h3 style={{ margin: 0 }}>{username}</h3>
          <p style={{ margin: 0, color: "#6b7280" }}>{email}</p>
        </div>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Username</label>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>{username}</span>
          <button style={editButtonStyle} onClick={() => setUsername(prompt("Enter new username:", username))}>Edit</button>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>{email}</span>
          <button style={editButtonStyle} onClick={() => setEmail(prompt("Enter new email:", email))}>Edit</button>
        </div>
      </div>
    </div>
  );
}

const editButtonStyle = {
  backgroundColor: "transparent",
  color: "#3b82f6",
  border: "none",
  cursor: "pointer"
};

export default UserDashboard;