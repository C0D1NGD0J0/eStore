import axios from "axios";
//import jwtDecode from "jwt-decode";

export const setAuthHeaderToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  };
};

//export const validateTokenState = (store) => {
//  if (localStorage.token) {
//    const decoded = jwtDecode(localStorage.token);
//    const currentTime = (Date.now().valueOf() / 1000);

//    if (decoded.exp < currentTime) {
//      return store.dispatch(logoutAction());
//    };
//  };
//};