import React from 'react';
import{ Link } from "react-router-dom";

const ProductTable = (props) => {
  const { collection } = props;

  let tr = collection && collection.map((item) =>{
    return (
    <tr>
      <td>
        <Link to="#!"><img className="cart-table__img" src={item.imgUrl} alt={item.name} /></Link>
      </td>
      <td><a href="#!">{item.name}</a></td>
      <td>${item.price}</td>
      <td>
        <div className="cart-table p-qty">
          <span className="fa fa-arrow-down"></span>
          <span className="p-qty">{item.quantity}</span>
          <span className="fa fa-arrow-up"></span>
        </div>
      </td>
      <td>{`$${item.quantity * item.price}`}</td>
      <td><a href="#"><i className="fa fa-trash"></i></a></td>
    </tr>);
  });

  if(!collection || collection.length <= 0){
    tr = (
      <div style={{margin: "2rem 0"}}>
        <h3>Your cart is currently empty!</h3>
      </div>
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
