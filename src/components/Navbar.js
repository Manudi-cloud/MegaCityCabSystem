import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>MegaCity Cab Service</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="./admin/dashboard">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/Guidelines">Help</Link>
        <Link to="/">My Profile</Link>

      </div>
    </nav>
  );
};

export default Navbar;
