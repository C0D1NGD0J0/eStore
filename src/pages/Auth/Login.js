import React from 'react';

const Login = (props) => {
  return (
    <div id="login" className="auth-page__content wow bounceInUp" style={{ display: "none" }}>
      <div className="auth-page__content-img"></div>
      <form className="form">
        <div className="form-group">
          <h3>Sign in</h3>
        </div>
        <div className="form-group">
          <input type="text" className="form__input" name="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <input type="password" name="password" className="form__input" placeholder="Enter Password" />
        </div>
        <div className="form-group">
          <label for="sdf" style={{ verticalAlign: "top" }}>
            <input type="checkbox" name="remember-me" id="sdf" className="form__checkbox" /> Remember Password
                   </label>
        </div>

        <div className="form-group">
          <button type="submit" className="btn-gold btn-lg">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
