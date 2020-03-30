import axios from "axios";
import { createNotification } from './notification';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./types";
const { REACT_APP_API_URL } = process.env;

export const addToWishlist = (product) => async dispatch => {
  try {
    await axios.put(REACT_APP_API_URL + `/products/${product._id}/add_to_wishlist`);
    dispatch({ type: ADD_TO_WISHLIST, payload: product });
    return dispatch(createNotification("Product added to wishlist", "success"));
  } catch (err) {
    console.log(err.response.data.error);
    return dispatch((createNotification("Login to add product to your wishlist", "warning")));
  };
};

export const removeFromWishlist = (product) => async dispatch => {
  try {
    await axios.put(REACT_APP_API_URL + `/products/${product._id}/remove_wishlist_item`);
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: product });
    return dispatch(createNotification("Product has been removed from wishlist", "warning"));
  } catch (err) {
    return dispatch((createNotification(err.response.data.error, "warning")));
  };
};

export const isAlreadyWishedItem = (list, product) =>{
  const res = list.filter((item) => item._id === product._id);
  return res.length > 0;
};