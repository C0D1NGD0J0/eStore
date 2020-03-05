import React from 'react';

const ProductTable = (props) => {
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
        <tr>
          <td><a href="#!"><img className="cart-table__img" src="https://via.placeholder.com/150" alt="" /></a></td>
          <td><a href="#!">Rolex Chrome 2000</a></td>
          <td>$350.00</td>
          <td><input type="number" defaultValue="2" className="form-control p-qty" /></td>
          <td>$700.00</td>
          <td><a href="#"><i className="fa fa-trash"></i></a></td>
        </tr>
        <tr>
          <td><a href="#!"><img className="cart-table__img" src="https://via.placeholder.com/150" alt="" /></a></td>
          <td><a href="#!">Rolex Chrome 2000</a></td>
          <td>$350.00</td>
          <td><input type="number" defaultValue="2" className="form-control p-qty" /></td>
          <td>$700.00</td>
          <td><a href="#"><i className="fa fa-trash"></i></a></td>
        </tr>
        <tr>
          <td><a href="#!"><img className="cart-table__img" src="https://via.placeholder.com/150" alt="" /></a></td>
          <td><a href="#!">Rolex Chrome 2000</a></td>
          <td>$350.00</td>
          <td><input type="number" defaultValue="2" className="form-control p-qty" /></td>
          <td>$700.00</td>
          <td><a href="#"><i className="fa fa-trash"></i></a></td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductTable;
