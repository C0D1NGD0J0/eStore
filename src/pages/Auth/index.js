import React, {useState, useReducer} from 'react';
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import AuthHeader from './authHeader';
import Login from "./Login";
import Register from "./Register";

const reducer = (state, action) =>{
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isLogin: true,
        isRegister: false
      };
    case 'REGISTER_USER':
      return {
        ...state,
        isLogin: false,
        isRegister: true
      }
    default:
      return state;
  };
};

const Auth = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    isLogin: false,
    isRegister: true
  });

  const handleToggleClick = (authType) =>{
    dispatch({ type: authType});
  };

  return (
    <ContentWrapper>
      <div className="row" id="auth-page">
        <div className="sm-12 col">
          <AuthHeader handleClick={handleToggleClick} isActive={state}/>

          <div className="auth-page">
            {state.isLogin && <Login show={state.isLogin} />}
            {state.isRegister && <Register show={state.isRegister} />}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Auth;
