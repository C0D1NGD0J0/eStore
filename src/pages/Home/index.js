import React, { Component, Fragment } from 'react';
import FeaturedProducts from './featured-products';
import ProductCategories from './product-categories';
import SalesBanner from './sales-banner';
import NewsLetter from './newsletter';
import Banner from './Banner';
import {categories, featured} from "../../data";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories,
      featured: featured()
    };
  }

  render() {

    return (
      <Fragment>
        <Banner />
        <FeaturedProducts featuredProducts={this.state.featured}/>
        <ProductCategories categories={this.state.categories}/>
        <SalesBanner />
        <NewsLetter />
      </Fragment>
    );
  }
}

export default Home;