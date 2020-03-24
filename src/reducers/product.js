import { GET_CATEGORY_PRODUCTS } from "../actions/types";

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
      return {
        ...state,
        loading: false,
        all: [...payload.products],
        pagination: payload.pagination
      }
    default:
      return state;
  };
};