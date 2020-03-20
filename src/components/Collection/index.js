import React from 'react';
import Card from "../Card";
import { Link } from "react-router-dom";

const Collection = (props) => {
  const { collection } = props;
  if (!collection) return null;

  if(collection.length <= 0){
    return (
    <div className="page-title">
      <h2>You currently don't have any items in your wishlist.</h2>
    </div>)
  }
  return (
    <div className="products-content__row">
      {
        collection.map((item, idx) =>{
          return <Card item={item} key={item.id}/>
        })
      }
    </div>
  );
}

export default Collection;
