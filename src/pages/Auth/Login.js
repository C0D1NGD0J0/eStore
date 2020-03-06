import React from 'react';
import useAuthForm from "../../utils/useForm";
import InputField from "../../components/FormElements/inputField";
import Button from "../../components/FormElements/button";

const inputFields = {
  inputs: {
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
  },
  isFormValid: false,
};

const Login = (props) => {
  const isVisible = {
    display: `${props.show ? 'flex' : 'none'}`
  };

  const [formData, handleChange] = useAuthForm(inputFields);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
  };

  const { inputs: { firstName, lastName, email, password, password2 }, isFormValid } = formData;

  return (
    <div id="login" className={`auth-page__content ${props.show ? 'animated fadeIn slow' : ''}`} style={isVisible}>
      <div className="auth-page__content-img"></div>
      <div className="wrapper">
        <form className="form">
          <div className="form-group">
            <h3>Sign in</h3>
          </div>
          
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

          <div className="form-group">
            <label htmlFor="sdf" style={{ verticalAlign: "middle", fontWeight: '300' }}>
              <input type="checkbox" name="remember-me" id="sdf" className="form__checkbox" /> Remember Password
            </label>
          </div>

          <div className="form-group">
            <Button classes="btn-regular btn-lg" disabled={!isFormValid}>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
