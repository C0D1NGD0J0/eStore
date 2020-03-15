import { v4 as uuid } from "uuid";
import { CREATE_NOTIFICATION, DELETE_NOTIFICATION } from "./types";

export const createNotification = (msg, alertType) => dispatch =>{
  const id = uuid();
  dispatch({
    type: CREATE_NOTIFICATION, 
    payload: {msg, alertType, id}
  });
};

export const removeNotification = (id) => dispatch =>{
  return dispatch({
    type: DELETE_NOTIFICATION,
    payload: id
  });
};