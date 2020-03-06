import React from 'react';
import ReactWOW from 'react-wow';
import FeaturedProductCard from "../../components/Card/MenuCard";

const FeaturedProducts = (props) => {
  const { featuredProducts } = props;
  let animation = "";
  
  return (
    <section className="featured" id="featured-products">
      <div className="featured-content">
        <ReactWOW animation="fadeInDown">
          <div className="featured-content__title">
            <h2>The best of new in</h2>
          </div>
        </ReactWOW>

        <div className="content-card-list">
          {
            featuredProducts.map((product,idx) =>{
              return <FeaturedProductCard animationClass="zoomIn" product={product} key={idx}/>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
