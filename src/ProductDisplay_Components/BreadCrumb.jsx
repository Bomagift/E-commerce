import React from 'react';
import './BreadCrumb.css';

const BreadCrumb = () => {
  return (
    <div className="Breadcrumb">
    <nav className="breadcrumb">
      <ul>
        <li><a href="#">Home</a></li>
        <li className='shop'>Shop</li>
      </ul>
    </nav>
    </div>
  );
};

export default BreadCrumb;