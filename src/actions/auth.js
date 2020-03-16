import axios from "axios";
import { createNotification } from './notification';
import { REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

const { REACT_APP_API_URL } = process.env;

export const userRegistration = (userdata, cb) => async dispatch =>{
  console.log("ENV: ", process.env.REACT_APP_API_URL);

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