import { REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  currentuser: null,
  loading: true
};

const authReducer = (state = initialState, action) =>{
  const { type, payload } = action;

  switch (type) {
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case REGISTRATION_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        loading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  };
};

export default authReducer;