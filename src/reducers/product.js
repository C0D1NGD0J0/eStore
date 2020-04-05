import { GET_CATEGORY_PRODUCTS, GET_PRODUCT, GET_PRODUCTS, SEARCH_SUCCESS } from "../actions/types";

const initialState = {
  all: [],
  active: null,
  loading: true,
  pagination: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORY_PRODUCTS:
    case SEARCH_SUCCESS:
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        all: [...payload.products],
        pagination: payload.pagination
      };
    case GET_PRODUCT:
      return {
        ...state,
        loading: false,
        active: { product: payload.product, reviews: payload.reviews }
      };
    default:
      return state;
  };
};