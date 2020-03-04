import React from 'react';
import NavbarSearch from './NavbarSearch';
import NavbarLinks from './NavbarLinks';
import NavbarCategoryLinks from './NavbarCategoryLinks';

const Navbar = (props) => {
  return (
    <div className="header">
      <NavbarLinks />
      <NavbarSearch />
      <NavbarCategoryLinks />
    </div>
  );
}

export default Navbar;