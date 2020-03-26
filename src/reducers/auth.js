import { REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, ACCOUNT_CONFIRMATION_SUCCESS, ACCOUNT_CONFIRMATION_FAIL, SET_CURRENTUSER, SET_AUTH_ERROR, LOGOUT, UPDATE_ACCOUNT_SUCCESS, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions/types";

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
    case LOGOUT:
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
      localStorage.setItem('token', payload);
      return{
        ...state,
        loading: false,
        token: payload,
        isAuthenticated: true
      };
    case SET_CURRENTUSER:
    case UPDATE_ACCOUNT_SUCCESS:
      return{
        ...state,
        loading: false,
        currentuser: {...payload},
        isAuthenticated: true,
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        currentuser: {
          ...state.currentuser,
          wishlist: [...state.currentuser.wishlist, payload]
        }
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        currentuser: {
          ...state.currentuser,
          wishlist: [...state.currentuser.wishlist.filter((item) => (item._id !== payload._id))]
        }
      };
    default:
      return state;
  };
};

export default authReducer;