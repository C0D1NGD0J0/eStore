import React from 'react';
import useAuthForm from "../../../utils/hooks/useForm";
import InputField from "../../../components/FormElements/inputField";
import Button from "../../../components/FormElements/button";
import { updateAccountSettings } from "../../../actions/auth";
import { useDispatch } from "react-redux";

const ProfileSettingForm = (props) => {
  const dispatch = useDispatch();
  const username = (fullname) => {
    const names = fullname.split(" ");
    let fname = names[0];
    let lname = names[1];

    return { firstName: fname, lastName: lname };
  };

  const inputFields = {
    inputs: {
      firstName: { value: username(props.currentuser.fullname).firstName || "" },
      lastName: { value: username(props.currentuser.fullname).lastName || "" },
      email: { value: props.currentuser.email || "" },
      phone: { value: props.currentuser.phone || "" },
      password: { value: "" },
      password2: { value: "" },
      currentPwd: { value: "" }
    }
  };

  const { state, handleChange, handleFormSubmit, formErrors, resetStateField } = useAuthForm(inputFields, _handleSubmit, 'updateUser');

  function _handleSubmit(error) {
    const hasErrors = Object.values(error).length > 0;
    const { firstName, lastName, email, password, currentPwd, phone } = state.inputs;

    if (!hasErrors) {
      const userdata = { firstName: firstName.value, lastName: lastName.value, email: email.value, password: password.value, currentPwd: currentPwd.value, phone: phone.value };

      dispatch(updateAccountSettings(userdata));
      return resetStateField("currentPwd");
    };
  };

  const { inputs: { firstName, lastName, email, password, password2, currentPwd, phone } } = state;

  return (
    <div className="account-settings__info">
      <form className="form" noValidate onSubmit={handleFormSubmit}>
        <div className="form-group">
          <h3>Account Settings</h3>
        </div>
        
        <div className="row">
          <div className="col-6 col">
            <InputField
              value={firstName.value}
              placeholder="First Name"
              name="firstName"
              handlechange={handleChange}
              error={formErrors && formErrors.firstName}
            />

            <InputField
              value={lastName.value}
              placeholder="Last Name"
              name="lastName"
              handlechange={handleChange}
              error={formErrors && formErrors.lastName}
            />

            <InputField
              value={email.value}
              placeholder="Enter Email"
              name="email"
              handlechange={handleChange}
              error={formErrors && formErrors.email}
            />

            <InputField
              value={phone.value}
              placeholder="Enter Phone# (xxx)-xxx-xxxx"
              name="phone"
              handlechange={handleChange}
              error={formErrors && phone.email}
            />
          </div>

          <div className="col-6 col">
            <InputField
              value={currentPwd.value}
              placeholder="Enter current password to update account"
              name="currentPwd"
              handlechange={handleChange}
              error={formErrors && formErrors.currentPwd}
              type="password"
            />

            <InputField
              value={password.value}
              placeholder="Enter Password"
              name="password"
              handlechange={handleChange}
              error={formErrors && formErrors.password}
              type="password"
            />

            <InputField
              value={password2.value}
              placeholder="Confirm Password"
              name="password2"
              handlechange={handleChange}
              error={formErrors && formErrors.password2}
              type="password"
            />
          </div>
        </div>
        
        <div className="form-group">
          <Button classes="btn-regular btn-lg">Update Account</Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSettingForm;