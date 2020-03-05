import React from 'react';
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import OrderSummary from './OrderSummary';
import ShoppingCart from "../../components/FormElements/ProductTable";
import {Link} from "react-router-dom";

const Cart = (props) => {
  return (
    <ContentWrapper>
      <div className="row" id="cart-page">
        <div className="sm-9 col">
          <div className="cart animated fadeInLeft">
            <div className="page-title">
              <h2>Shopping Cart</h2>
            </div>
            <ShoppingCart />
            <div className="back-btn" style={{marginTop: "4rem"}}>
              <Link to="/store" className="btn btn-regular">Back to Shopping</Link>
            </div>
          </div>
        </div>

        <div className="sm-3 md-3 col">
          <div className="cart-sidebar animated fadeInRight">
            <OrderSummary />
          </div>
        </div>
      </div>
    </ContentWrapper>    
  );
}

export default Cart;
