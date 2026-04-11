import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // already on home → force refresh
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="navbar">
      <h2 onClick={handleHomeClick} style={{ cursor: "pointer" }}>
        FOSSEE Workshops
      </h2>

      <span
        className="nav-link"
        onClick={handleHomeClick}
        style={{ cursor: "pointer" }}
      >
        Home
      </span>
    </div>
  );
}

export default Navbar;