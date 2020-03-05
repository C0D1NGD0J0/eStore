import React from 'react';

const AuthHeader = (props) => {
  return (
    <div className="auth-page__controlBtns">
      <button className="btn-toggle" id="loginBtn">Login</button>
      <button className="btn-toggle active" id="registerBtn">Register</button>
    </div>
  );
}

export default AuthHeader;
