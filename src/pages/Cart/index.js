import React from 'react';
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import OrderSummary from './OrderSummary';

const Cart = (props) => {
  return (
    <ContentWrapper>
      <div className="row">
        <div className="sm-9 md-9 col">
          <div className="cart animated fadeInLeft" id="cart-page">
            <div className="page-title">
              <h2>Shopping Cart</h2>
            </div>
            <table className="cart-table">
              <thead>
                <tr>
                  <th colSpan="2">Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th colSpan="2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#!"><img src="https://via.placeholder.com/150" alt=""/></a></td>
                    <td><a href="#!">Rolex Chrome 2000</a></td>
                    <td>$350.00</td>
                    <td><input type="number" value="2" className="form-control p-qty"/></td>
                    <td>$700.00</td>
                    <td><a href="#"><i className="fa fa-trash"></i></a></td>
                  </tr>
                  <tr>
                    <td><a href="#!"><img src="https://via.placeholder.com/150" alt=""/></a></td>
                    <td><a href="#!">Rolex Chrome 2000</a></td>
                    <td>$350.00</td>
                    <td><input type="number" value="2" className="form-control p-qty"/></td>
                    <td>$700.00</td>
                    <td><a href="#"><i className="fa fa-trash"></i></a></td>
                  </tr>
                  <tr>
                    <td><a href="#!"><img src="https://via.placeholder.com/150" alt=""/></a></td>
                    <td><a href="#!">Rolex Chrome 2000</a></td>
                    <td>$350.00</td>
                    <td><input type="number" value="2" className="form-control p-qty"/></td>
                    <td>$700.00</td>
                    <td><a href="#"><i className="fa fa-trash"></i></a></td>
                  </tr>
              </tbody>
            </table>
            <div className="back-btn" style={{marginTop: "4rem"}}>
              <a href="store.html" className="btn btn-regular">Back to Shopping</a>
            </div>
          </div>
        </div>

        <div className="sm-3 md-3 col">
          <div className="cart-sidebar">
            <OrderSummary />
          </div>
        </div>
      </div>
    </ContentWrapper>    
  );
}

export default Cart;
