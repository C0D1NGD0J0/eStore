import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../../../actions/auth";
import { selectCartItemsCount } from "../../../selectors/cartSelector";

const NavbarLinks = ({ auth: { isAuthenticated, currentuser }, userLogout, cartItemCount }) => {
  
  return (
    <div className="header-navbar">
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link to="/" className="nav-list__link">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        {
          !isAuthenticated ? 
            <li className="nav-list__item">
              <Link to="/auth" className="nav-list__link">
                <i className="fas fa-user"></i> Register/Login
              </Link>
            </li> :
            <li className="nav-list__item">
              <Link to="/myaccount" className="nav-list__link">
                <i className="fas fa-user"></i> Account
              </Link>
            </li>
        }
        <li className={`nav-list__item ${cartItemCount > 0 ? 'animate-border' : null}`}>
          <Link to="/cart" className="nav-list__link">
            <i className="fas fa-shopping-bag"></i> Cart ({cartItemCount})
          </Link>
        </li>
        <li className="nav-list__item">
          <Link to="/wishlist" className="nav-list__link">
            <i className={`fas fa-heart ${currentuser && currentuser.wishlist.length > 0 ? 'isactive' : null}`}></i> Wishlist
          </Link>
        </li>
        {
          isAuthenticated ? 
            <li className="nav-list__item">
              <span className="nav-list__link" onClick={userLogout}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </span>
            </li> : null
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  cartItemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, { userLogout })(NavbarLinks);