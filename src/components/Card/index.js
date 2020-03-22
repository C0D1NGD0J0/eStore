import React from 'react';
import { Link } from "react-router-dom";
import ReactWOW from 'react-wow';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cart";

const Card = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  if(!item){
    return <h1>Loading...</h1>
  };

  return (
    <ReactWOW animation="zoomIn">
      <div className="product-card slow">
        <div className="product-card__top">
          <div className="product-card__img">
            <img src={item.photos[0].url} alt={item.photos[0].filename} />
          </div>
          <div className="product-card__overlay">
            <button><Link to={`/products/${item.id}`}><i className="fa fa-eye"></i></Link></button>
            <button><i className="fa fa-heart-o"></i></button>
            <button onClick={() => dispatch(addToCart(item))}><i className="fa fa-shopping-cart"></i></button>
          </div>
        </div>
        <div className="product-card__bottom">
          <h3>{item.name}</h3>
          <h4>${item.price}</h4>
        </div>
      </div>
    </ReactWOW>
  );
}

export default Card;
