import React from 'react';

const SidebarMenuLinks = () => {
  return (
    <ul className="navbar__list">
      <li className="navbar__list-item">
        <a href="index.html" className="navbar__list-item__link">Home</a>
      </li>
      <li className="navbar__list-item">
        <a href="!#" className="navbar__list-item__link">About Us</a>
      </li>
      <li className="navbar__list-item">
        <a href="store.html" className="navbar__list-item__link">Store</a>
      </li>
      <li className="navbar__list-item">
        <a href="wishlist.html" className="navbar__list-item__link">Wishlist</a>
      </li>
      <li className="navbar__list-item">
        <a href="account.html" className="navbar__list-item__link">Account</a>
      </li>
      <li className="navbar__list-item">
        <a href="cart.html" className="navbar__list-item__link">Cart</a>
      </li>
    </ul>
  );
}

export default SidebarMenuLinks;
