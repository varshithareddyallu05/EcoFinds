import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // adjust path if needed

function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => setDarkMode(!darkMode);

  const styles = {
    button: {
      padding: "0.5rem 1rem",
      margin: "1rem",
      backgroundColor: darkMode ? "#f3f4f6" : "#1f2937",
      color: darkMode ? "#1f2937" : "#f3f4f6",
      border: "1px solid transparent",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "0.9rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      transition: "all 0.3s ease"
    },
    icon: {
      fontSize: "1.2rem"
    }
  };

  return (
    <button onClick={toggleTheme} style={styles.button} aria-label="Toggle theme">
      <span style={styles.icon}>{darkMode ? "🌞" : "🌙"}</span>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;