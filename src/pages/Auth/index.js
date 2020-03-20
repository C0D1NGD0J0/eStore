import React, {useReducer} from 'react';
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import AuthHeader from './authHeader';
import Login from "./Login";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
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
    isLogin: true,
    isRegister: false
  });
    
  const handleToggleClick = (authType) =>{
    dispatch({ type: authType });
  };

  if (props.isAuthenticated) {
    return <Redirect to="/store" />
  };

  return (
    <ContentWrapper>
      <div className="row" id="auth-page">
        <div className="sm-12 col">
          <AuthHeader handleClick={handleToggleClick} isActive={state}/>

          <div className="auth-page">
            {state.isLogin && <Login show={state.isLogin} history={props.history} />}
            {state.isRegister && <Register show={state.isRegister} />}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Auth);