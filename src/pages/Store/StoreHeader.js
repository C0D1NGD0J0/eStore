import React from 'react';

const StoreHeader = (props) => {
  return (
    <div className="products-content__menu">
      <h4 className="products-content__menu-title">{props.title}</h4>

      <select name="sortOptions" onChange={(e) => props.handleSortOption(e.target.value)}>
        <option value="createdAt">Newest</option>
        <option value="price">Price (Low-High)</option>
        <option value="name">Names</option>
      </select>
    </div>
  );
}

export default StoreHeader;