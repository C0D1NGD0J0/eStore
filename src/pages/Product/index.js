import React from 'react';
import ContentWrapper from "../../components/Layouts/ContentWrapper";

const Product = (props) => {
  return (
    <ContentWrapper>
      <div className="row">
        <div className="sm-12 col">
          <div class="single-product">
            <div class="single-product-wrapper wow fadeInDown">
              <div class="single-product__image wow fadeInLeft">
                <img src="https://via.placeholder.com/150" alt="" />
              </div>
              <div class="single-product__details wow fadeInRight">
                <div class="ratings">
                  <span><i class="fa fa-star"></i></span>
                  <span><i class="fa fa-star"></i></span>
                  <span><i class="fa fa-star"></i></span>
                  <span><i class="fa fa-star"></i></span>
                  <span><i class="fa fa-star"></i></span>
                </div>
                <h2 class="title">Bose 700 Series</h2>
                <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, unde.</p>
                <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, itaque voluptates eveniet dolores id saepe at aspernatur nostrum praesentium eligendi voluptas ab nobis assumenda ipsum quia minus magni officiis fuga sit autem! Excepturi itaque laudantium, dolore vitae odio corrupti sint laborum explicabo impedit cumque asperiores debitis alias? Eos, illum enim!</p><hr/>
                <h3 class="price">$500.00</h3>

                <div class="actions">
                  <button class="btn btn-lg btn-regular">Add to Cart</button>
                  <button class="btn btn-circle"><i class="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Product;
