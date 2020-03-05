import React from 'react';

const passwordSetting = () => {
  return (
    <div className="account-settings__password">
      <form className="form">
        <div className="form-group">
          <h3>Password Change</h3>
        </div>
        <div className="form-group">
          <input type="password" name="password" className="form__input" placeholder="Current Password" />
        </div>
        <div className="form-group">
          <input type="password" name="password" className="form__input" placeholder="New Password" />
        </div>
        <div className="form-group">
          <input type="password" name="password2" className="form__input" placeholder="Confirm  Password" />
        </div>

        <div className="form-group">
          <button type="submit" className="btn-regular btn-lg">Update</button>
        </div>
      </form>
    </div>
  );
}

export default passwordSetting;
