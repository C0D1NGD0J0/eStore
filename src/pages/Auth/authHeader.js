import React from 'react';

const AuthHeader = (props) => {
  const { handleClick, isActive } = props;

  return (
    <div className="auth-page__controlBtns">
      <button className={`btn-toggle ${isActive.isLogin ? 'active' : null}`} onClick={() => handleClick("LOGIN_USER")}>Login</button>

      <button className={`btn-toggle ${isActive.isRegister ? 'active' : null}`} onClick={() => handleClick("REGISTER_USER")}>Register</button>
    </div>
  );
}

export default AuthHeader;
