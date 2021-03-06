import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const initialState = {};
const middlewares = [thunk];

if(process.env.NODE_ENV !== 'production'){
  //middlewares.push(logger);
};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);