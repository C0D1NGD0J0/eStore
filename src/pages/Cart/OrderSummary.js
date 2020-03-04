import React from 'react';

const OrderSummary = (props) => {
  return (
    <div className="order-summary" id="order-summary">
      <h3 className="order-summary__title">Order Summary.</h3><hr width="15%" />
      <ul className="order-summary__list">
        <li className="order-summary__list-item">
          <span className="title">Order subtotal</span>
          <span className="amount">$1300.00</span>
        </li>
        <li className="order-summary__list-item">
          <span className="title">Shipping</span>
          <span className="amount">$50.00</span>
        </li>
        <li className="order-summary__list-item">
          <span className="title">Estimated Tax</span>
          <span className="amount">$130.50</span>
        </li>
        <li className="order-summary__list-item">
          <span className="title total">Total</span>
          <span className="amount">$1500.50</span>
        </li>
        <li className="order-summary__list-item coupon">
          <input type="text" name="coupon" id="" placeholder="Enter coupon code" />
        </li>
        <li className="order-summary__list-item checkout-action">
          <button className="btn btn-checkout">Checkout <i className="fab fa-cc-mastercard"></i></button>
          <button className="btn btn-checkout">Paypal <i className="fab fa-cc-paypal"></i></button>
        </li>
      </ul>
    </div>
  );
}

export default OrderSummary;
