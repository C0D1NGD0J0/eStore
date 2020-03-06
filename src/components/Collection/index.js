import React from 'react';
import Card from "../Card";
import { Link } from "react-router-dom";

const Collection = (props) => {
  const { products } = props;
  if(!products) return null;

  return (
    <div className="products-content__row">
      {
        products.map((item, idx) =>{
          return <Card item={item} key={idx}/>
        })
      }
    </div>
  );
}

export default Collection;
