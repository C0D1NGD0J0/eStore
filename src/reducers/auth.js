import { REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, ACCOUNT_CONFIRMATION_SUCCESS, ACCOUNT_CONFIRMATION_FAIL, SET_CURRENTUSER, SET_AUTH_ERROR } from "../actions/types";

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
    case LOGIN_FAIL:
    case ACCOUNT_CONFIRMATION_FAIL:
    case SET_AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        loading: false,
        isAuthenticated: false,
      };
    case ACCOUNT_CONFIRMATION_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('toekn', payload.token);
      return{
        ...state,
        loading: false,
        token: payload.token,
        isAuthenticated: true
      };
    case SET_CURRENTUSER:
      return{
        ...state,
        loading: false,
        currentuser: payload,
        isAuthenticated: true,
      };
    default:
      return state;
  };
};

export default authReducer;