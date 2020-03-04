import React from 'react';
import ReactWOW from 'react-wow';

const FeaturedProducts = (props) => {
  return (
    <section className="featured" id="featured-products">
      <div className="featured-content">
        <ReactWOW animation="fadeInDown">
          <div className="featured-content__title">
            <h2>The best of new in</h2>
          </div>
        </ReactWOW>
        <div className="content-card-list">
          <div className="content-card wow fadeInLeft">
            <div className="content-card__img">
              <a href="!#">
                <img src="https://via.placeholder.com/150" alt="" />
              </a>
            </div>
            <div className="content-card__title">
              <a href="!#" className="btn btn-link">Product One Name</a>
            </div>
          </div>

          <div className="content-card wow fadeInLeft">
            <div className="content-card__img">
              <a href="!#">
                <img src="https://via.placeholder.com/150" alt="" />
              </a>
            </div>
            <div className="content-card__title">
              <a href="!#" className="btn btn-link">Product One Name</a>
            </div>
          </div>

          <div className="content-card wow fadeInRight">
            <div className="content-card__img">
              <a href="!#">
                <img src="https://via.placeholder.com/150" alt="" />
              </a>
            </div>
            <div className="content-card__title">
              <a href="!#" className="btn btn-link">Product One Name</a>
            </div>
          </div>

          <div className="content-card wow fadeInRight">
            <div className="content-card__img">
              <a href="!#">
                <img src="https://via.placeholder.com/150" alt="" />
              </a>
            </div>
            <div className="content-card__title">
              <a href="!#" className="btn btn-link">Product One Name</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
