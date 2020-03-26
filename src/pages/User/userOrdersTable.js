import React from 'react';
import Moment from "react-moment";
import { Link } from "react-router-dom";

const statusBgStyle = (status) =>{
  let cssStyle;

  switch(status) {
    case 'processing':
      return cssStyle = 'background-warning';
    case 'processed':
    case 'shipped':
      return cssStyle = 'background-success';
    case 'cancelled':
      return cssStyle = 'background-danger';
    default:
      return cssStyle = '';
  };
};

const userOrdersTable = ({orders}) => {
  const _tr = orders && orders.map((item) =>{
    return (
      <tr key={item._id}>
        <td>{item._id}</td>
        <td><Moment format="DD/MM/YYYY">{item.createdAt}</Moment></td>
        <td>${item.totalAmount}</td>
        <td><span className={statusBgStyle(item.status)}>{item.status}</span></td>
        <td><Link to={`/myaccount/orders/${item._id}`}><i className="fas fa-eye"></i></Link></td>
      </tr>
    );
  });

  return (
    <table className="table-hover">
      <thead>
        <tr>
          <th>Order</th>
          <th>Date</th>
          <th>Total</th>
          <th>Status</th>
          <th>&nbsp;</th>
        </tr>
      </thead>

      <tbody>
        {orders.length > 0 ? _tr : <tr><td><h3>No orders have been placed.</h3></td></tr> }
      </tbody>
    </table>
  );
}

export default userOrdersTable;
