import React from 'react';

const NavbarSearch = (props) => {
  return (
    <div className="header-search">
      <form className="search-form">
        <input type="text" id="search" placeholder="Search Product" className="search-form__input" />
        <button className="search-btn"><i className="fas fa-search"></i></button>
      </form>
    </div>
  );
}

export default NavbarSearch;