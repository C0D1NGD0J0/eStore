import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getProduct, getRelatedProducts } from "../../actions/product";
import Collection from "../../components/Collection/";
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import { addToCart } from "../../actions/cart";

const Product = (props) => {
  const dispatch = useDispatch();
  const { productId } = props.location.state;
  const product = useSelector((state) => state.products.active);
  const relatedProducts = useSelector((state) => state.products.all);
  
  useEffect(() =>{
    async function fetchData(id, product){
      dispatch(getProduct(id));
      dispatch(getRelatedProducts(product));
    };

    fetchData(productId, product);
  }, [productId, product && product._id]);

  if(!product){
    return <h1>Loading...</h1>
  };

  return (
    <ContentWrapper>
      <div className="row">
        <div className="sm-12 col">
          <div className="single-product">
            <div className="single-product-wrapper animated fadeInDown">
              <div className="single-product__image animated fadeInLeft">
                <img src={`${product.photos[0].url}`} alt={product.name} />
              </div>
              <div className="single-product__details animated fadeInRight">
                <div className="whiteBox">
                  <div className="ratings">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                  </div>
                  <h2 className="title">{product.name}</h2>
                  <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, unde.</p>
                  <p className="description">{product.description}</p><hr/>
                  <h3 className="price">${product.price.toFixed(2)}</h3>

                  <div className="actions">
                    <button onClick={() => dispatch(addToCart(product))} className="btn btn-lg btn-regular">Add to Cart</button>
                    <button className="btn btn-circle"><i className="fa fa-heart"></i></button>
                  </div>
                </div>

                <div className="reviews-box">
                  <div className="page-title">
                    <h3>Reviews <span>(2)</span></h3> <hr />
                  </div>
                  <ul className="review-list">
                    <li className="review-list__item">
                      <div className="review">
                        <p className="review__name"><span>Nathan Ford,</span> November 15, 2017</p>
                        <span className="ratings">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                        </span>
                        <p className="review__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil fuga illo earum, architecto a ab nesciunt nisi praesentium odit ullam dolorum quo aliquam, sint doloremque?</p>
                      </div>
                    </li>

                    <li className="review-list__item">
                      <div className="review">
                        <p className="review__name"><span>Nathan Ford,</span> November 15, 2017</p>
                        <p className="review__rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                        </p>
                        <p className="review__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil fuga illo earum, architecto a ab nesciunt nisi praesentium odit ullam dolorum quo aliquam, sint doloremque?</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="sm-12 col">
          <div className="page-title">
            <h3 style={{textAlign: 'left'}}>Related Products</h3><hr width="5%" style={{margin: "0"}}/>
          </div>

          <div className="wishlist" style={{padding: "0"}}>
            <Collection collection={relatedProducts} />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Product;
