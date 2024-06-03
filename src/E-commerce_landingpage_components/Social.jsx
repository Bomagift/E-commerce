import React from "react";
import "./Social.css";

function Social() {
  return (
    <div className="social-container">
      <div className="social-left">
        <h3 className="logo">Bandage</h3>
        </div>
        
        <div className="social-right">
          <a href="#facebook" className="social-icon">
            <img src="/public/Images/facebook (1).png" alt="" className="icon" />
          </a>

          <a href="#instagram" className="social-icon">
            <img
              src="/public/Images/instagram (1).png"
              alt=""
              className="icon"
            />
          </a>

          <a href="#twitter" className="social-icon">
            <img
              src="/public/Images/twitter (1).png"
              alt=""
              className="icon"
            />
          </a>
        
      </div>
    </div>
  );
}

export default Social;
