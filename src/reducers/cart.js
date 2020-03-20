import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";
import { updateCartItemsCount } from "../utils/cartUtil";

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
      }
    default:
      return state;
  };
};