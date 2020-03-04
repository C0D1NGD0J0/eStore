import React from 'react';
import { Link } from "react-router-dom";

const SidebarMenuLinks = (props) => {
  return (
    <ul className="navbar__list">
      <li className="navbar__list-item">
        <Link to="/" className="navbar__list-item__link">Home</Link>
      </li>
      <li className="navbar__list-item">
        <a href="!#" className="navbar__list-item__link">About Us</a>
      </li>
      <li className="navbar__list-item">
        <Link to="/store" className="navbar__list-item__link">Store</Link>
      </li>
      <li className="navbar__list-item">
        <Link to="/wishlist" className="navbar__list-item__link">Wishlist</Link>
      </li>
      <li className="navbar__list-item">
        <Link to="/auth" className="navbar__list-item__link">Account</Link>
      </li>
      <li className="navbar__list-item">
        <Link to="/cart" className="navbar__list-item__link">Cart</Link>
      </li>
    </ul>
  );
}

export default SidebarMenuLinks;
