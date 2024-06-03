import React from "react";
import "./FunitureGridpage.css";

function FunitureGridpage() {
  return (
    <div className="container">
      <div className="item large-vertical">
        <img src="/public/Images/media bg-cover (2).png" alt="Item 1" />
        <div className="overlay">
          <span>5 Items</span>
          <h2>FURNITURE</h2>
          <p>Read More</p>
        </div>
      </div>
      
      <div className="right-container">
        <div className="item large-horizontal">
          <img src="/public/Images/media bg-cover (1).png" alt="Item 2" />
          <div className="overlay">
            <span>5 Items</span>
            <h2>FURNITURE</h2>
            <p>Read More</p>
          </div>
        </div>

        <div className="small-container">
          <div className="item small">
            <img src="/public/Images/media bg-cover (3).png" alt="Item 3" />
            <div className="overlay">
              <span>5 Items</span>
              <h2>FURNITURE</h2>
              <p>Read More</p>
            </div>
          </div>

          <div className="item small">
            <img src="/public/Images/media bg-cover (4).png" alt="Item 4" />
            <div className="overlay">
              <span>5 Items</span>
              <h2>FURNITURE</h2>
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunitureGridpage;
