import axios from "axios";
import { createNotification } from './notification';
import { GET_CATEGORY_PRODUCTS, GET_PRODUCT } from "./types";
const { REACT_APP_API_URL } = process.env;

export const getCategoryProducts = (catId, page, limit) => async dispatch =>{
  try {
    const res = await axios.get(`${REACT_APP_API_URL}/products/categories/${catId}?page=${page}`);
    return dispatch({ type: GET_CATEGORY_PRODUCTS, payload: res.data });
  } catch (err) {
    console.log("Products Error: ", err.response.data.errors);
  };
};

export const getProduct = (productId) => async (dispatch) =>{
  try {
    const res = await axios.get(`${REACT_APP_API_URL}/products/${productId}`);
    return dispatch({ type: GET_PRODUCT, payload: res.data });
  } catch (err) {
    const error = err.response.data.error;
    return dispatch((createNotification(error, "danger")));
  };
};

export const getRelatedProducts = (product) => async (dispatch) =>{
  if(product){
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