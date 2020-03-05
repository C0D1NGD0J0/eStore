import React from 'react';

const profileSettingForm = (props) => {
  return (
    <div className="account-settings__info">
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
          <input type="text" className="form__input" name="phone" placeholder="Enter Phone#" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn-regular btn-lg">Update</button>
        </div>
      </form>
    </div>
  );
}

export default profileSettingForm;
