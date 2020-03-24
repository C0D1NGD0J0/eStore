import React from 'react';
import { Link } from "react-router-dom";

const SHIPPING_COST = 40.00;
const TAX_RATES = {
  gst: 6,
  hst: 7
};

const calculateTaxes = (amount = 0, taxes) =>{
  const gstRate = taxes.gst;
  const hstRate = taxes.hst;
  const pstRate = taxes.gst + taxes.hst;

  return{
    gst: amount * (gstRate/100),
    hst: amount * (hstRate/100),
    getCostAfterTax: function(){
      return amount + this.gst + this.hst;
    },
    getCostWithPST: function () {
      return amount * (pstRate/100)
    }
  };
};

const calculateShipping = (amount = 0, shippingCost) =>{
  return amount + shippingCost
};

const OrderSummary = (props) => {
  const { cartTotal } = props;
  const estimatedTax = calculateTaxes(cartTotal, TAX_RATES).getCostWithPST();
  const totalCost = cartTotal + estimatedTax + (cartTotal > 0 ? SHIPPING_COST : 0);

  return (
    <div className="order-summary" id="order-summary">
      <h3 className="order-summary__title">Order Summary.</h3><hr width="15%" />
      <ul className="order-summary__list">
        <li className="order-summary__list-item">
          <span className="title">Order subtotal</span>
          <span className="amount">${cartTotal.toFixed(2)}</span>
        </li>
        <li className="order-summary__list-item">
          <span className="title">Shipping</span>
          <span className="amount">${(cartTotal > 0 ? SHIPPING_COST : 0)}</span>
        </li>
        <li className="order-summary__list-item">
          <span className="title">Estimated Tax</span>
          <span className="amount">${estimatedTax.toFixed(2)}</span>
        </li>
        <li className="order-summary__list-item">
          <span className="title total">Total</span>
          <span className="amount">${totalCost.toFixed(2)}</span>
        </li>
        {
          cartTotal > 0 ?
            <li className="order-summary__list-item coupon">
              <input type="text" name="coupon" id="" placeholder="Enter coupon code" />
            </li> : null
        }
        {
          props.displayBtn && cartTotal > 0 ?
            <li className="order-summary__list-item checkout-action">
              <Link to={{
                pathname: "/checkout",
                state: {
                  orderTotal: {
                    subtotal: cartTotal.toFixed(2),
                    tax: estimatedTax.toFixed(2),
                    shipping: SHIPPING_COST,
                    total: totalCost.toFixed(2)
                  }
                }
              }} className="btn-regular btn-lg">Pay Now</Link>
            </li>
          : null
        }
      </ul>
    </div>
  );
}

export default OrderSummary;
