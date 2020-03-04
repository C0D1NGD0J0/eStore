import React, { Component, Fragment } from 'react';
import FeaturedProducts from './featured-products';
import ProductCategories from './product-categories';
import SalesBanner from './sales-banner';
import NewsLetter from './newsletter';
import Banner from './Banner';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <FeaturedProducts />
        <ProductCategories />
        <SalesBanner />
        <NewsLetter />
      </Fragment>
    );
  }
}

export default Home;