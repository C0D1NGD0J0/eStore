import React from 'react';
import{ Link } from "react-router-dom";

const ProductTable = (props) => {
  const { collection, clearItems, reduceQty, increaseQty } = props;

  let tr = collection && collection.map((item) =>{
    return (
    <tr key={item._id}>
      <td>
        <Link to="#!"><img className="cart-table__img" src={item.photos[0].url} alt={item.name} /></Link>
      </td>
      <td><a href="#!">{item.name}</a></td>
      <td>${item.price}</td>
      <td>
        <div className="cart-table p-qty">
          <span onClick={() => reduceQty(item)} className="fa fa-arrow-down"></span>
          <span className="p-qty">{item.qty}</span>
          <span onClick={() => increaseQty(item)} className="fa fa-arrow-up"></span>
        </div>
      </td>
      <td>{`$${item.qty * item.price}`}</td>
        <td><span onClick={() => clearItems(item)}><i className="fa fa-trash"></i></span></td>
    </tr>);
  });

  if(!collection || collection.length <= 0){
    tr = (
      <tr style={{margin: "4rem 0"}}>
        <td colSpan="5">Your cart is currently empty!</td>
      </tr>
    );
  };

  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th colSpan="2">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th colSpan="2"></th>
        </tr>
      </thead>
      <tbody>
        {tr}
      </tbody>
    </table>
  );
}

export default ProductTable;
