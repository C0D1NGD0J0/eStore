import React from 'react';
import ReactWOW from 'react-wow';

const SalesBanner = (props) => {
  return (
    <section className="sales">
      <ReactWOW animation="slideInUp">
        <div className="sales__banner-content">
          <h4>Lorem ipsum dolor sit amet consectetur!</h4>
          <a href="!#" className="btn btn-regular btn-lg">Shop Sales</a>
        </div>
      </ReactWOW>
    </section>
  );
}

export default SalesBanner;
