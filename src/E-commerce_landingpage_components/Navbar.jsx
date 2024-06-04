import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const moveToPayment = () => {
    setIsMenuOpen(false);
    navigate("/Payment");
  };
  const Home = () => {
    setIsMenuOpen(false);
    navigate("/");
  };
  const Shop = () => {
    setIsMenuOpen(false);
    navigate("/ProductDisplay");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h3 className="logo" onClick={Home}>Bandage</h3>
        <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <a onClick={Home}> Home</a>
          <a onClick={Shop}>
            Shop <img src="/Images/Vector (6).png" alt="" />
          </a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <a href="#pages">Pages</a>
        </div>
      </div>

      <div className="navbar-right">
        <a href="#login" className="nav-icon">
          <img src="/Images/Vector (5).png" alt="Login" className="icons-2" /> Login / Register
        </a>
        <a href="#search" className="nav-icons">
          <img src="/Images/li (1).png" alt="Search" className="icons" />
        </a>
        <a onClick={moveToPayment} className="nav-icons">
          <img src="/Images/Vector (15).png" alt="Cart" className="icons-3" />
        </a>
        <a href="#wishlist" className="nav-icons">
          <img src="/Images/Vector (13).png" alt="Wishlist" className="icons-4" />
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
      </div>
    </div>
  );
}

export default Navbar;