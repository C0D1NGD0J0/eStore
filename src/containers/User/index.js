import React, { Component } from 'react';
import { connect } from "react-redux";
import UserOrdersTable from './userOrdersTable';
import UserSidebarOptions from './userSidebarOptions';
import ContentWrapper from "../../components/Layouts/ContentWrapper";

class UserDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
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
                <UserOrdersTable />
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    )
  }
}

export default connect(null)(UserDashboard);