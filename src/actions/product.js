import axios from "axios";
import { GET_CATEGORY_PRODUCTS } from "./types";
const { REACT_APP_API_URL } = process.env;

export const getCategoryProducts = (catId, page, limit) => async dispatch =>{
  try {
    const res = await axios.get(`${REACT_APP_API_URL}/products/categories/${catId}?page=${page}&limit=${limit}`);
    return dispatch({ type: GET_CATEGORY_PRODUCTS, payload: res.data });
  } catch (err) {
    console.log("Products Error: ", err.response.data.errors);
  };
};