import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../../../actions/auth";

const SidebarMenuLinks = ({ auth: { isAuthenticated }, userLogout }) => {
  return (
    <ul className="navbar__list">
      <li className="navbar__list-item">
        <Link to="/" className="navbar__list-item__link">Home</Link>
      </li>
      <li className="navbar__list-item">
        <Link to="/store" className="navbar__list-item__link">Store</Link>
      </li>
      <li className="navbar__list-item">
        <Link to="/wishlist" className="navbar__list-item__link">Wishlist</Link>
      </li>
      {
        isAuthenticated ?
          <Fragment>
            <li className="navbar__list-item">
              <Link to="/myaccount" className="navbar__list-item__link">Account</Link>
            </li>
            <li className="navbar__list-item">
              <a href="#!" className="navbar__list-item__link" onClick={userLogout}><i className="fas fa-sign-out-alt"></i>Logout</a>
            </li>
          </Fragment> : (
            <li className="navbar__list-item">
              <Link to="/auth" className="navbar__list-item__link">Register/Login</Link>
            </li>
          )
      }
      <li className="navbar__list-item">
        <Link to="/cart" className="navbar__list-item__link">Cart</Link>
      </li>
    </ul>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { userLogout })(SidebarMenuLinks);