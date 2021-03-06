import axios from "axios";
import { createNotification } from './notification';
import { GET_CATEGORY_PRODUCTS, GET_PRODUCT, GET_PRODUCTS, SEARCH_PRODUCTS, SEARCH_SUCCESS, SEARCH_FAIL } from "./types";
const { REACT_APP_API_URL } = process.env;

export const getAllProducts = (page, sortOption) => async (dispatch) =>{
  try {
    const res = await axios.get(`${REACT_APP_API_URL}/products?page=${page}&sortBy=${sortOption}`);
    return dispatch({ type: GET_PRODUCTS, payload: res.data });
  } catch (err) {
    console.log("Products Error: ", err.response.data.errors);
  };
};

export const getCategoryProducts = (catId, page, sortOption="") => async dispatch => {
  if(catId){
    try {
      const res = await axios.get(`${REACT_APP_API_URL}/products/categories/${catId}?page=${page}&sortBy=${sortOption}`);
      return dispatch({ type: GET_CATEGORY_PRODUCTS, payload: res.data });
    } catch (err) {
      console.log("Products Error: ", err.response.data.errors);
    };
  };
};

export const getProduct = (productId) => async (dispatch) => {
  try {
    const res = await axios.get(`${REACT_APP_API_URL}/products/${productId}`);
    return dispatch({ type: GET_PRODUCT, payload: res.data });
  } catch (err) {
    const error = err.response.data.error;
    return dispatch((createNotification(error, "danger")));
  };
};

export const getRelatedProducts = (product) => async (dispatch) => {
  if (product) {
    try {
      const res = await axios.get(`${REACT_APP_API_URL}/products/${product._id}/related_products/category/${product.category.parentCategory}`);
      return dispatch({ type: GET_CATEGORY_PRODUCTS, payload: res.data });
    } catch (err) {
      console.log("Err: ", err);
      //const error = err.response.data.error;
      //return dispatch((createNotification(error, "danger")));
    };
  };
};

export const searchForProduct = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_PRODUCTS });
    const res = await axios.get(`${REACT_APP_API_URL}/products/search/?searchQuery=${query}`);
    return dispatch({ type: SEARCH_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("Search Error: ", err.response);
    const error = err.response.data.error;

    dispatch({ type: SEARCH_FAIL });
    return dispatch((createNotification(error, "danger")));
  };
};