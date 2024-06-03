import React from 'react';
import './Layout.css';
import sampleImage from '/Images/card-item (6).png'; 

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="text-content">
        <h1>the quick fox jumps over</h1>
        <p>
          Met minim Mollie nor cleser. Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitat on venial consequent sent nostrum met.
        </p>
        <blockquote>
          Met minim Mollie nor cleser. Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </blockquote>
        <p>
          Met minim Mollie nor cleser. Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitat on venial consequent sent nostrum met.
        </p>
      </div>
      <div className="image-content">
        <img src={sampleImage} alt="Sample" />
      </div>
    </div>
  );
};

export default Layout;