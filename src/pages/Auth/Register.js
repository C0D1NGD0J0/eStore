import React from 'react';
import{ Link } from "react-router-dom";
import useAuthForm from "../../utils/useForm";
import InputField from "../../components/FormElements/inputField";
import Button from "../../components/FormElements/button";

const inputFields = {
  inputs: {
    firstName: { value: "", isValid: false },
    lastName: { value: "", isValid: false },
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    password2: { value: "", isValid: false },
  },
  isFormValid: false,
};

const Register = (props) => {
  const isVisible = {display: `${props.show ? 'flex' : 'none'}`};
  const cssClass = `auth-page__content ${props.show ? 'animated fadeIn slow' : ''}`;

  const [formData, handleChange] = useAuthForm(inputFields);

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    console.log(formData);
  };

  const { inputs: {firstName, lastName, email, password, password2}, isFormValid } = formData;

  return (
    <div id="register" className={cssClass} style={isVisible}>
      <div className="wrapper">
        <form className="form" noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <h3>Register</h3>
          </div>
          <InputField 
            value={firstName.value}
            placeholder="First Name"
            name="firstName"
            handlechange={handleChange}
            error=""
          />

          <InputField
            value={lastName.value}
            placeholder="Last Name"
            name="lastName"
            handlechange={handleChange}
            error=""
          />

          <InputField
            value={email.value}
            placeholder="Enter Email"
            name="email"
            handlechange={handleChange}
            error=""
          />
          
          <InputField
            value={password.value}
            placeholder="Enter Password"
            name="password"
            handlechange={handleChange}
            error=""
            type="password"
          />
          
          <InputField
            value={password2.value}
            placeholder="Confirm Password"
            name="password2"
            handlechange={handleChange}
            error=""
            type="password"
          />

          <div className="form-group">
            <Button classes="btn-regular btn-lg" disabled={isFormValid}>Register</Button>
          </div>
        </form>
      </div>

      <div className="auth-page__content-img"></div>
    </div>
  );
}

export default Register;
