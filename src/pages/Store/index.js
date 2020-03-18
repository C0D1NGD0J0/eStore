import React, { Component } from 'react';
import Sidebar from "./Sidebar/sidebar";
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import StoreHeader from './StoreHeader';
import ProductCollection from "../../components/Collection";
import Pagination from '../../components/Pagination';
import { static_data } from "../../data";
import { getSubCategories } from "../../actions/category";

class Store extends Component {
  constructor(props){
    super(props);
    this.state = {
      PRODUCTS: static_data,
      categoryId: null,
      subCategories: [],
      currentCategory: ""
    };
  }

  componentDidMount(){
    const categoryId = this.props.history.location.state;
    const currentCategory = this.props.match.params.category;

    this.setState({ categoryId, currentCategory });

    this.fetchCategoryData(categoryId);
  }

  componentDidUpdate(prevProp, prevState){
    const categoryId = this.props.history.location.state;
    const currentCategory = this.props.match.params.category;

    if ((prevState.categoryId !== 'null') && prevState.categoryId !== categoryId){
      this.setState({ categoryId, currentCategory});
      return this.fetchCategoryData(categoryId);
    };
  };

  fetchCategoryData = async (_parentId) => {
    try {
      const subCat = await getSubCategories(_parentId);
      return this.setState({ subCategories: subCat });
    } catch (error) {
      console.log(error);
    };
  };

  render() {
    const { PRODUCTS  } = this.state;
    
    return (
      <ContentWrapper>
        <div className="row">
          <div className="sm-3 col">
            <aside className="sidebar">
              <Sidebar subCategories={this.state.subCategories} />
            </aside>
          </div>

          <div className="sm-9 col">
            <div className="products-content">
              <StoreHeader title={this.state.currentCategory}/>
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