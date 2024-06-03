import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h3 className="logo">Bandage</h3>
        <div className="nav-menu">
          <a href="#home">Home</a>
          <a href="#shop">
            Shop <img src="/public/Images/Vector (6).png" alt="" />
          </a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <a href="#pages">Pages</a>
        </div>
      </div>
      
      <div className="navbar-right">
        <a href="#login" className="nav-icon">
          <img
            src="/public/Images/Vector (5).png"
            alt="Login"
            className="icons-2"
          />{" "}
          Login / Register
        </a>
        <a href="#search" className="nav-icons">
          <img src="/public/Images/li (1).png" alt="Search" className="icons" />
        </a>
        <a href="#cart" className="nav-icons" >
          <img src="/Images/Vector (15).png" alt="Cart" className="icons-3" />
        </a>
        <a href="#wishlist" className="nav-icons">
          <img
            src="/Images/Vector (13).png"
            alt="Wishlist"
            className="icons-4"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
