import { REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, ACCOUNT_CONFIRMATION_SUCCESS, ACCOUNT_CONFIRMATION_FAIL } from "../actions/types";

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
    default:
      return state;
  };
};

export default authReducer;