import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import UserOrdersTable from './userOrdersTable';
import UserSidebarOptions from './userSidebarOptions';
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import { getUserOrders } from "../../actions/order";

const UserDashboard = (props) => {
  const [orders, setOrders] = useState([]);
  const currentUser = useSelector((state) => state.auth.currentuser);
  
  useEffect(() =>{
    async function fetchOrders(){
      const res = await getUserOrders();
      setOrders([...res]);
    };

    fetchOrders();
  }, []);

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
              <h2>My Orders</h2>
              <p className="lead">Your order history</p>
              <p className="text-muted">If you have any questions, please feel free to contact us, our customer service center is available 24/7.</p>
            </div>

            <div className="account-myOrders__table">
              <UserOrdersTable orders={orders}/>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default UserDashboard;