import React, { Component } from 'react';
import Sidebar from "./Sidebar/sidebar";
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import StoreHeader from './StoreHeader';
import ProductCollection from "../../components/Collection";
import Pagination from '../../components/Pagination';
import { static_data } from "../../data";

class Store extends Component {
  constructor(props){
    super(props);
    this.state = {
      PRODUCTS: static_data
    };
  }

  render() {
    const { PRODUCTS  } = this.state;
    
    return (
      <ContentWrapper>
        <div className="row">
          <div className="sm-3 col">
            <aside className="sidebar">
              <Sidebar />
            </aside>
          </div>

          <div className="sm-9 col">
            <div className="products-content">
              <StoreHeader title="Headphones"/>
              {
                PRODUCTS.map(({products}, idx) =>{
                  return <ProductCollection key={idx} products={products}/>
                })
              }
              <Pagination />
            </div>
          </div>
        </div>
      </ContentWrapper>
    )
  }
}

export default Store;