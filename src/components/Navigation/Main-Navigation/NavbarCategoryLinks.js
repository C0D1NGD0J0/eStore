import React from 'react';
const categories = [{ name: 'Headphone' }, { name: 'Television' }, { name: 'Watches' }, { name: 'Speakers' }, { name: 'Accessories' }]

const NavbarCategoryLinks = (props) => {
  const _li = categories.map((item,idx) =>{
    return (
      <li className="menu-list__item" key={idx}>
        <a href="!#" className="menu-list__link">{item.name}</a>
      </li>
    )
  })
  return (
    <div className="header-menu">
      <ul className="menu-list">
        {_li}
      </ul>
    </div>
  );
}

export default NavbarCategoryLinks;
