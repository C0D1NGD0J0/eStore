import axios from "axios";
import { createNotification } from './notification';
import { REGISTRATION_SUCCESS, REGISTRATION_FAIL, ACCOUNT_CONFIRMATION_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_START, SET_CURRENTUSER, SET_AUTH_ERROR, PWD_RESET_SUCCESS, LOGOUT, UPDATE_ACCOUNT_SUCCESS, UPDATE_ACCOUNT_FAIL } from "../actions/types";
import { setAuthHeaderToken } from "../config/";

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

export const userLogin = (userdata, cb) => async dispatch =>{
  try {
    dispatch({type: LOGIN_START});
    const res = await axios.post(`${REACT_APP_API_URL}/auth/login`, userdata);
    dispatch({type: LOGIN_SUCCESS, payload: res.data.token});
    dispatch(createNotification("Login was successful.", "success"));
    dispatch(getCurrentuser());
    return cb();
  } catch (err) {
    const error = err.message;
    console.log(err);
    dispatch({ type: LOGIN_FAIL });

    return dispatch((createNotification(error, "danger")));
  };
};

export const userLogout = () => dispatch =>{
  dispatch({type: LOGOUT});
};

export const getCurrentuser = (callback) => async dispatch =>{
  if(localStorage.getItem('token')){
    setAuthHeaderToken(localStorage.getItem('token'));
  };

  try {
    const res = await axios.get(`${REACT_APP_API_URL}/users/currentuser`);
    dispatch({type: SET_CURRENTUSER, payload: res.data.currentuser});
  } catch (err) {
    const error = err.response.data.error;
    console.log(error);
    dispatch({ type: SET_AUTH_ERROR });
  };

  if (callback) {
    callback()
  };
};

export const updateAccountSettings = (userdata) => async dispatch =>{
  try {
    const res = await axios.put(`${REACT_APP_API_URL}/users/currentuser/updateAccount`, userdata);
    dispatch({ type: UPDATE_ACCOUNT_SUCCESS, payload: res.data.currentuser });
    return dispatch(createNotification("Update was successful.", "success"));
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    dispatch({ type: UPDATE_ACCOUNT_FAIL });
    
    if (errors) {
      errors.forEach(e => {
        dispatch(createNotification(e.msg, "danger"));
      });

      return;
    };

    return dispatch((createNotification(err.response.data.error, "danger")));
  };
};

export const forgotPassword = (userdata, cb) => async dispatch =>{
  try {
    const res = await axios.post(`${REACT_APP_API_URL}/auth/forgot_password`, userdata);
    dispatch(createNotification(res.data.msg, "success"));
    return cb();
  } catch (err) {
    const error = err.response.data.error;
  
    dispatch({ type: SET_AUTH_ERROR });
    return dispatch((createNotification(error, "danger")));
  };
};

export const resetPassword = (userdata, token, cb) => async dispatch =>{
  try {
    const res = await axios.put(`${REACT_APP_API_URL}/auth/reset_password/${token}`, userdata);
    dispatch({ type: PWD_RESET_SUCCESS, payload: res.data.token });
    dispatch(createNotification("Password reset was successful.", "success"));
    return cb();
  } catch (err) {
    const error = err.response.data.error;
  
    dispatch({ type: SET_AUTH_ERROR });
    return dispatch((createNotification(error, "danger")));
  };
};