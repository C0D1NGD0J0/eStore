import {CREATE_NOTIFICATION, DELETE_NOTIFICATION} from "../actions/types";

const initialState = [];

export default function (state = initialState, action){
  const { type, payload } = action;
  switch (type) {
    case CREATE_NOTIFICATION:
      return [payload];
    case DELETE_NOTIFICATION:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  };
};