import { combineReducers } from "redux";
import notificationReducer from "./notification";
import authReducer from "./auth";
import cartReducer from "./cart";

export default combineReducers({
  notification: notificationReducer,
  auth: authReducer,
  cart: cartReducer
});