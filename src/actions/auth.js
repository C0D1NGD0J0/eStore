import axios from "axios";
import { createNotification } from './notification';
import { REGISTRATION_SUCCESS, REGISTRATION_FAIL, ACCOUNT_CONFIRMATION_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

const { REACT_APP_API_URL } = process.env;

export const userRegistration = (userdata, cb) => async dispatch =>{
  try {
    const res = await axios.post(REACT_APP_API_URL + "/auth/register", userdata);
    dispatch({ type: REGISTRATION_SUCCESS });
    dispatch(createNotification(res.data.msg, "success"));
    return cb();
  } catch (err) {
    const errors = err.response.data.errors;
    dispatch({ type: REGISTRATION_FAIL });

    if(errors){
      errors.forEach(e =>{
        dispatch(createNotification(e.msg, "danger"));
      });

      return;
    };

    return dispatch((createNotification(err.response.data.error, "danger")));
  };
};

export const activateAccount = (token) => async dispatch =>{
  try {
    const res = await axios.get(`${REACT_APP_API_URL}/auth/account_activation/${token}`);
    
    dispatch({ type: ACCOUNT_CONFIRMATION_SUCCESS, payload: res.data.token });
    return dispatch(createNotification("Account has been activated", "success"));
  } catch (err) {
    const error = err.response.data.error;
    dispatch({ type: REGISTRATION_FAIL });

    return dispatch((createNotification(error, "danger")));
  };
};