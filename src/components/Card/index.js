import React from 'react';
import { Link } from "react-router-dom";

const Card = (props) => {
  const { item } = props;

  return (
    <div className="product-card wow zoomIn">
      <div className="product-card__top">
        <div className="product-card__img">
          <img src={item.imgUrl} alt={item.name} />
        </div>
        <div className="product-card__overlay">
          <button><Link to={`/products/${item.id}`}><i className="fa fa-eye"></i></Link></button>
          <button><i className="fa fa-heart-o"></i></button>
          <button><i className="fa fa-shopping-cart"></i></button>
        </div>
      </div>
      <div className="product-card__bottom">
        <h3>{item.name}</h3>
        <h4>${item.price}</h4>
      </div>
    </div>
  );
}

export default Card;
