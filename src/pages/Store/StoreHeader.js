import React from 'react';

const StoreHeader = (props) => {
  return (
    <div className="products-content__menu">
      <h4 className="products-content__menu-title">Headphones</h4>
      <select name="sortOptions">
        <option value="newest">Newest</option>
        <option value="price">Price (Low-High)</option>
        <option value="title">Names</option>
      </select>
    </div>
  );
}

export default StoreHeader;