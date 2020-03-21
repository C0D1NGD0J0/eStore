import { combineReducers } from "redux";
import notificationReducer from "./notification";
import authReducer from "./auth";
import cartReducer from "./cart";
import productReducer from "./product";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  notification: notificationReducer,
  auth: authReducer,
  cart: cartReducer,
  products: productReducer
});

export default persistReducer(persistConfig, rootReducer);