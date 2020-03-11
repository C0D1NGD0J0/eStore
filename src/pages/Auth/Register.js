import React from 'react';
import{ Link } from "react-router-dom";
import useAuthForm from "../../utils/hooks/useForm";
import InputField from "../../components/FormElements/inputField";
import Button from "../../components/FormElements/button";

const inputFields = {
  inputs: {
    firstName: { value: "" },
    lastName: { value: "" },
    email: { value: "" },
    password: { value: "" },
    password2: { value: "" },
  }
};

const Register = (props) => {
  const { state, handleChange, handleFormSubmit, formErrors } = useAuthForm(inputFields, _handleSubmit, 'register');
  
  const isVisible = {display: `${props.show ? 'flex' : 'none'}`};
  const cssClass = `auth-page__content ${props.show ? 'animated fadeIn slow' : ''}`;

  function _handleSubmit(){
    console.log(formErrors);
    console.log(state.inputs);
  };
  
  const { inputs: {firstName, lastName, email, password, password2} } = state;
  
  return (
    <div id="register" className={cssClass} style={isVisible}>
      <div className="wrapper">
        <form className="form" noValidate onSubmit={handleFormSubmit}>
          <div className="form-group">
            <h3>Register</h3>
          </div>
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

          <div className="form-group">
            <Button classes="btn-regular btn-lg">Register</Button>
          </div>
        </form>
      </div>

      <div className="auth-page__content-img"></div>
    </div>
  );
}

export default Register;
