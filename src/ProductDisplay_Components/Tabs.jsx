import React, { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <div className="tabs">
          <ul className="tab-list">
              <li className='tab-item'>  
              Description
          </li>

          <li className='tab-item'>
          Additional Information
      </li>
      
      <li className='tab-item'>
          Reviews <span className="reviews-count">(0)</span>
      
          </li>
      </ul>
    </div>
  );
};

export default Tabs;