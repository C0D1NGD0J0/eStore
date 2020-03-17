import axios from "axios";
import jwtDecode from "jwt-decode";
import { userLogout } from '../actions/auth';
import { createNotification } from '../actions/notification';

export const setAuthHeaderToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  };
};

export const validateTokenState = (store) => {
  const token = localStorage.getItem('token');
  if (token && token !== 'undefined') {
    const decoded = jwtDecode(token);
    const currentTime = (Date.now().valueOf() / 1000);

    if (currentTime > (typeof decoded.exp !== 'undefined') && decoded.exp) {
      return store.dispatch(userLogout());
    };
  };
};