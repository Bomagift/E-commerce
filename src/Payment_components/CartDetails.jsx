import React from "react";
import "./CartDetails.css";

const CartDetails = () => {
  const items = [1, 2, 3];

  return (
    <div className="cart-details">
      <h2>Shopping Cart</h2>
      <div className="cart-header">
        <div>Item Details</div>
        <div>Quantity</div>
        <div>Price</div>
      </div>
      {items.map((item, index) => (
        <div className="cart-item" key={index}>
          <div className="item-details">
            <div className="remove-image">
              <img src="/Images/single-product-1-thumb-1 (1).jpg" alt="Item" />
              <button className="remove-button">
                <img src="/Images/mdi_delete-outline.png" alt="Remove" />
              </button>
            </div>
            <div className="item-info">
              <div className="item-name">Graphic Design</div>
              <div className="item-stock">In Stock</div>
              <div className="item-reviews">★★★★★<span className="number-review"> 22 Reviews</span></div>
            </div>
          </div>
          <div className="quantity">
            <button className="quantity-button">-</button>
            <input type="text" value="1" readOnly />
            <button className="quantity-button">+</button>
          </div>
          <div className="price">
            ₦3,000
            <div className="price-detail">₦3,000 x 1 item</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartDetails;
