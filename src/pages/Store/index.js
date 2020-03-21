import React, { Component } from 'react';
import Sidebar from "./Sidebar/sidebar";
import { connect } from "react-redux";
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import StoreHeader from './StoreHeader';
import ProductCollection from "../../components/Collection";
import Pagination from '../../components/Pagination';
import { getSubCategories } from "../../actions/category";
import { getCategoryProducts } from "../../actions/product";

class Store extends Component {
  constructor(props){
    super(props);
    this.state = {
      categoryId: null,
      subCategories: [],
      currentCategory: "",
      current_page: 1
    };
  }

  componentDidMount(){
    const categoryId = this.props.history.location.state;
    const currentCategory = this.props.match.params.category;

    this.setState({ categoryId, currentCategory });
  }

  componentDidUpdate(prevProp, prevState){
    const categoryId = this.props.history.location.state;
    const currentCategory = this.props.match.params.category;

    if ((prevState.categoryId !== 'null') && prevState.categoryId !== categoryId){
      this.setState({ categoryId, currentCategory});
      this.fetchCategoryData(categoryId);
      return this.fetchCategoryProducts(categoryId);
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

  fetchCategoryProducts = async (categoryId, page=1, limit=4) =>{
    return this.props.getCategoryProducts(categoryId, page, limit)
  };

  handlePageClick = (page, action) => {
    let current_page = page;
    if(!current_page){
      current_page= action === "next" ? this.state.current_page + 1 : this.state.current_page - 1
    }
    this.setState({current_page});
    this.fetchCategoryProducts(this.state.categoryId, current_page);
    this.fetchCategoryData(this.state.categoryId);
  }

  render() {    
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

export default connect(mapStateToProps, {getCategoryProducts})(Store);