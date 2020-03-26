import React, { useEffect, useState } from 'react';
import { getOrderDetails } from "../../../actions/order";
import UserSidebarOptions from '../userSidebarOptions';
import ContentWrapper from "../../../components/Layouts/ContentWrapper";
import Moment from "react-moment";

const UserOrder = (props) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { orderId } = props.match.params;

  useEffect(() => {
    async function fetchData(id){
      const res = await getOrderDetails(id);
      setOrder(res);
      return setLoading(false);
    };

    fetchData(orderId);
  }, [orderId]);

  if(loading){
    return <h2>Loading...</h2>
  };
  
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
              <h2>Order #{order._id.slice(0, 6)}</h2>
              <p className="lead">Your order was placed on <Moment format="DD/MM/YYYY">{order.createdAt}</Moment> and is currently in the <span className="background-warning">{order.status}</span> stage.</p>
              <p className="text-muted">If you have any questions, please feel free to contact us, our customer service center is available 24/7.</p>
            </div>

            <div className="account-myOrders__table">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th colSpan="2">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    order.products.map((product) =>{
                      return (<tr key={product.name}>
                        <td><a href="#!"><img src={product.photos[0].url} alt={product.name} className="cart-table__img"/></a></td>
                        <td><a href="#!">{product.name}</a></td>
                        <td>${product.price.toFixed(2)}</td>
                        <td><span className="form-control p-qty">{product.quantity}</span></td>
                        <td>${product.quantity * product.price}</td>
                      </tr>)
                    })
                  }
                  
                  <tr>
                    <td colSpan="3"></td>
                    <td><h4>Sub-total</h4></td>
                    <td>${order.costBreakdown.subtotal}</td>
                  </tr>
                  <tr>
                    <td colSpan="3"></td>
                    <td><h4>Tax</h4></td>
                    <td>${order.costBreakdown.tax}</td>
                  </tr>
                  <tr>
                    <td colSpan="3"></td>
                    <td><h3>Total</h3></td>
                    <td>${order.totalAmount.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="account-myOrders__shippingInfo">
              <h4>Shipping Details:</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur magnam animi mollitia pariatur expedita illo amet deserunt? Placeat ipsum ullam aspernatur mollitia. Recusandae, corrupti.</p>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default UserOrder;