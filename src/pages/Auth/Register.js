import React from 'react';

const Register = (props) => {
  return (
    <div id="register" className="auth-page__content wow bounceInDown">
      <form className="form">
        <div className="form-group">
          <h3>Register</h3>
        </div>
        <div className="form-group">
          <input type="text" className="form__input" name="firstName" placeholder="First Name" />
        </div>
        <div className="form-group">
          <input type="text" className="form__input" name="firstName" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <input type="email" className="form__input" name="email" placeholder="Enter Email" />
        </div>
        <div className="form-group">
          <input type="password" name="password" className="form__input" placeholder="Enter Password" />
        </div>
        <div className="form-group">
          <input type="password" name="password2" className="form__input" placeholder="Confirm Password" />
        </div>

        <div className="form-group">
          <button type="submit" className="btn-regular btn-lg">Register</button>
        </div>
      </form>
      <div className="auth-page__content-img"></div>
    </div>
  );
}

export default Register;
