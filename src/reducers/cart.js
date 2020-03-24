import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ITEM_FROM_CART, EMPTY_CART } from "../actions/types";
import { updateCartItemsCount, removeItemFromCart } from "../utils/cartUtil";

const initialState = {
  items: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      return{
        ...state,
        items: updateCartItemsCount(state.items, payload)
      };
    case REMOVE_FROM_CART:
      return{
        ...state,
        items: state.items.filter((product) => product._id !== payload._id)
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: removeItemFromCart(state.items, payload)
      };
    case EMPTY_CART:
      return {
        ...state,
        items: []
      }
    default:
      return state;
  };
};