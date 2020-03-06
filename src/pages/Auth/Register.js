import React, {useState} from 'react';
import{ Link } from "react-router-dom";
import InputField from "../../components/FormElements/inputField";
import Button from "../../components/FormElements/button";

const Register = (props) => {
  const isVisible = {display: `${props.show ? 'flex' : 'none'}`};
  const cssClass = `auth-page__content ${props.show ? 'animated fadeIn slow' : ''}`;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  });
  
  const { firstName, lastName, email, password, password2 } = formData;
  
  const handleChange = (evt) =>{
    const { value, name } = evt.target;

    setFormData({...formData, [name]: value });
  };

  const handleSubmit = (evt) =>{
    evt.preventDefault();
  };

  return (
    <div id="register" className={cssClass} style={isVisible}>
      <div className="wrapper">
        <form className="form" noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <h3>Register</h3>
          </div>
          <InputField 
            value={firstName}
            placeholder="First Name"
            name="firstName"
            handlechange={handleChange}
            error=""
          />

          <InputField
            value={lastName}
            placeholder="Last Name"
            name="lastName"
            handlechange={handleChange}
            error=""
          />

          <InputField
            value={email}
            placeholder="Enter Email"
            name="email"
            handlechange={handleChange}
            error=""
          />
          
          <InputField
            value={password}
            placeholder="Enter Password"
            name="password"
            handlechange={handleChange}
            error=""
          />
          
          <InputField
            value={password2}
            placeholder="Confirm Password"
            name="password2"
            handlechange={handleChange}
            error=""
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
