import React from 'react';

const NavbarLinks = (props) => {
  return (
    <div className="header-navbar">
      <ul className="nav-list">
        <li className="nav-list__item">
          <a href="!#" className="nav-list__link">
            <i className="fas fa-home"></i>
            Home
            </a>
        </li>
        <li className="nav-list__item">
          <a href="!#" className="nav-list__link">
            <i className="fas fa-user"></i>
            Register/Login
            </a>
        </li>
        <li className="nav-list__item">
          <a href="!#" className="nav-list__link">
            <i className="fas fa-shopping-cart"></i>
            Cart (2)
            </a>
        </li>
        <li className="nav-list__item">
          <a href="!#" className="nav-list__link">
            <i className="fas fa-heart"></i>
            Wishlist
            </a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarLinks;
