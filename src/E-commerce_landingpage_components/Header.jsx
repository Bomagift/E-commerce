import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="contact">
          <img src="/Images/Vector (1).png" alt="" className="icon" />
          <h6>(225) 555-0118</h6>
        </span>

        <span className="email">
          <img src="/Images/Vector (4).png" alt="" className="icon" />
          <h6 className="landingpageH6">michelle.rivera@example.com</h6>
        </span>
      </div>

      <div className="header-center">
        <h6> Follow Us and get a chance to win 80% off</h6>
      </div>
      
      <div className="header-right">
        <h6>Follow Us:</h6>
        <a href="#instagram" className="social-icon">
          <img src="/Images/a.png" alt="" className="icon" />
        </a>

        <a href="#youtube" className="social-icon">
          <img
            src="/Images/icn settings icn-xs (2).png"
            alt=""
            className="icon"
          />
        </a>

        <a href="#facebook" className="social-icon">
          <img
            src="/Images/icn settings icn-xs.png"
            alt=""
            className="icon"
          />
        </a>

        <a href="#twitter" className="social-icon">
          <img
            src="/Images/icn settings icn-xs (1).png"
            alt=""
            className="icon"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
