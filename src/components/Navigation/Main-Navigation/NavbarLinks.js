import React from 'react';
import { Link } from "react-router-dom";

const NavbarLinks = (props) => {
  return (
    <div className="header-navbar">
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link to="/" className="nav-list__link">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li className="nav-list__item">
          <Link to="/auth" className="nav-list__link">
            <i className="fas fa-user"></i> Register/Login
          </Link>
        </li>
        <li className="nav-list__item animate-border">
          <Link to="/cart" className="nav-list__link">
            <i className="fas fa-shopping-bag"></i> Cart (2)
          </Link>
        </li>
        <li className="nav-list__item">
          <Link to="/wishlist" className="nav-list__link">
            <i className="fas fa-heart"></i> Wishlist
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarLinks;
