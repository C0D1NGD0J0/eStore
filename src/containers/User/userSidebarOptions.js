import React from 'react';
import { Link } from "react-router-dom";

const userSidebarOptions = (props) => {
  return (
    <div className="sidebar-widget">
      <div className="sidebar-widget__box">
        <h5>My Account</h5>
        <hr width="10%" />
        <ul className="category-list account-nav">
          <li><Link to="/myaccount"><i className="fas fa-home"></i> My Orders</Link></li>
          <li><Link to="/myaccount/settings"><i className="fas fa-cogs"></i> Settings</Link></li>
          <li><Link to="/myaccount/wishlist"><i className="fas fa-list"></i> Wishlist</Link></li>
          <li><Link to="!#"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default userSidebarOptions;
