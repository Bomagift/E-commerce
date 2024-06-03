import React from 'react';
import './PaymentBreadcrumbs.css';

const PaymentBreadcrumbs = () => {
  return (
    <nav className="breadcrumb-2">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li>Shopping Cart</li>
      </ul>
    </nav>
  );
};

export default PaymentBreadcrumbs;