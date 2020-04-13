import React, { Component } from 'react';
import Sidebar from "./Sidebar/sidebar";
import { connect } from "react-redux";
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import StoreHeader from './StoreHeader';
import ProductCollection from "../../components/Collection";
import Pagination from '../../components/Pagination';
import { getSubCategories } from "../../actions/category";
import { getCategoryProducts, getAllProducts } from "../../actions/product";
import Spinner from "../../components/Spinner/";

class Store extends Component {
  constructor(props){
    super(props);
    this.state = {
      categoryId: null,
      subCategories: [],
      currentCategory: "",
      current_page: 1,
      sortOption: ""
    };
  }

  componentDidMount(){
    const categoryId = this.props.history.location.state;
    const currentCategory = this.props.match.params.category;
    
    if(!categoryId){
      return this.fetchAllProducts(1, this.state.sortOptions);
    };

    this.setState({ categoryId, currentCategory });
  }

  componentDidUpdate(prevProp, prevState){
    const categoryId = this.props.history.location.state;
    const currentCategory = this.props.match.params.category;
    
    if ((prevState.categoryId !== 'null') && prevState.categoryId !== categoryId){
      this.fetchCategoryData(categoryId);
      this.fetchCategoryProducts(categoryId);
      return this.setState({ categoryId, currentCategory});
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

  fetchCategoryProducts = async (categoryId, page=1, sortOption) =>{
    return this.props.getCategoryProducts(categoryId, page, sortOption);
  };

  fetchAllProducts = async (page = 1, sortQuery) =>{
    return this.props.getAllProducts(page, sortQuery);
  };

  handlePageClick = (page, action) => {
    let current_page = page;
    if(!current_page){
      current_page = action === "next" ? this.state.current_page + 1 : this.state.current_page - 1
    };

    this.setState({current_page});

    if(this.state.categoryId){
      this.fetchCategoryProducts(this.state.categoryId, current_page, this.state.sortOption);
      return this.fetchCategoryData(this.state.categoryId);
    };

    this.fetchAllProducts(current_page, this.state.sortOption);
  }

  handleSortOption = (sortQuery) =>{
    this.setState({ sortOption: sortQuery, current_page: 1});
    if(!this.state.categoryId){
      return this.fetchAllProducts(1, sortQuery);
    };

    this.fetchCategoryProducts(this.state.categoryId, 1, sortQuery);
  };

  render() {  
    if(this.props.products.loading){
      return <Spinner />
    };

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
              <StoreHeader title={this.state.currentCategory || "All Products"} handleSortOption={this.handleSortOption}/>
              
              <ProductCollection collection={this.props.products.all} />
              
              {
                this.props.products.pagination ?
                  <Pagination pagination={this.props.products.pagination} handlePageClick={this.handlePageClick} current_page={this.state.current_page}/>
                : null
              }
            </div>
          </div>
        </div>
      </ContentWrapper>
    )
  }
}

const mapStateToProps = state =>({
  products: state.products
});

export default connect(mapStateToProps, {getCategoryProducts, getAllProducts})(Store);