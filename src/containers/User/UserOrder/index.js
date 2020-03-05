import React from 'react';
import UserSidebarOptions from '../userSidebarOptions';
import ContentWrapper from "../../../components/Layouts/ContentWrapper";
import WishlistCollection from "../../../components/Collection";
import PageHeader from "../../../pages/Store/StoreHeader";

const UserOrder = (props) => {
  return (
    <ContentWrapper>
      <div className="row" id="userAccount-page">
        <div className="sm-3 col">
          <aside className="sidebar">
            <UserSidebarOptions />
          </aside>
        </div>

        <div className="sm-9 col">
          <div className="account-myOrders">
            <div className="account-myOrders__header">
              <h2>Order #1345</h2>
              <p className="lead">Your order was placed on 1/3/2020 and is currently being <span className="background-warning">Processed</span></p>
              <p className="text-muted">If you have any questions, please feel free to contact us, our customer service center is available 24/7.</p>
            </div>

            <div className="account-myOrders__table">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th colspan="2">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#!"><img src="https://via.placeholder.com/150" alt="" /></a></td>
                    <td><a href="#!">Rolex Chrome 2000</a></td>
                    <td>$350.00</td>
                    <td><input type="number" value="2" className="form-control p-qty" disabled /></td>
                    <td>$700.00</td>
                  </tr>
                  <tr>
                    <td><a href="#!"><img src="https://via.placeholder.com/150" alt="" /></a></td>
                    <td><a href="#!">Rolex Chrome 2000</a></td>
                    <td>$350.00</td>
                    <td><input type="number" value="2" className="form-control p-qty" disabled /></td>
                    <td>$700.00</td>
                  </tr>
                  <tr>
                    <td><a href="#!"><img src="https://via.placeholder.com/150" alt="" /></a></td>
                    <td><a href="#!">Rolex Chrome 2000</a></td>
                    <td>$350.00</td>
                    <td><input type="number" value="2" className="form-control p-qty" disabled /></td>
                    <td>$700.00</td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
                    <td><h4>Sub-total</h4></td>
                    <td>$700.00</td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
                    <td><h4>Tax</h4></td>
                    <td>$70.00</td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
                    <td><h3>Total</h3></td>
                    <td>$770.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default UserOrder;
