import React from "react";
import "./OrderSummary.css";

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <div className="summary">
        <h2>Order Summary</h2>
        <p className="items">4 Items</p>
      </div>
      <div className="summary-items">
        <span>Delivery Charges</span>
        <span className="delivery-note">
          Add your delivery <br /> address to checkout to <br />
          see delivery charges.
        </span>
      </div>
      <div className="summary-items subtotal">
        <span>Subtotal</span>
        <span className="summary-value">₦26,500</span>
      </div>
      <div className="summary-items total">
        <span>Total</span>
        <span className="summary-value">₦26,500</span>
      </div>
      <span className="excl-delivery">
        Excluding Delivery <br /> Charges
      </span>
      <div className="button">
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
      <div className="payment-methods">
        <img
          src="/Images/Paystack - png.png"
          className="paystack"
          alt="Paystack"
        />
        <img
          src="/Images/Mastercard - png.png"
          className="masterCard"
          alt="MasterCard"
        />
        <img src="/Images/Visa Inc. - png.png" className="visa" alt="Visa" />
      </div>
    </div>
  );
};

export default OrderSummary;
