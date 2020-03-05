import React from 'react';

const userOrdersTable = (props) => {
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
        <tr>
          <td>#1345</td>
          <td>22/05/2017</td>
          <td>$149.99</td>
          <td><span className="background-warning">Processing</span></td>
          <td><a href="order.html"><i className="fas fa-eye"></i></a></td>
        </tr>

        <tr>
          <td>#1345</td>
          <td>22/05/2017</td>
          <td>$149.99</td>
          <td><span className="background-success">Received</span></td>
          <td><a href="order.html"><i className="fa fa-eye"></i></a></td>
        </tr>

        <tr>
          <td>#1345</td>
          <td>22/05/2017</td>
          <td>$149.99</td>
          <td><span className="background-danger">Cancelled</span></td>
          <td><a href="order.html"><i className="fa fa-eye"></i></a></td>
        </tr>
      </tbody>
    </table>
  );
}

export default userOrdersTable;
