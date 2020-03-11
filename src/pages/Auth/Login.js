import React from 'react';
import useAuthForm from "../../utils/hooks/useForm";
import InputField from "../../components/FormElements/inputField";
import Button from "../../components/FormElements/button";

const inputFields = {
  inputs: {
    email: { value: "" },
    password: { value: "" },
  }
};

const Login = (props) => {
  const { state, handleChange, handleFormSubmit, formErrors } = useAuthForm(inputFields, _handleSubmit, 'login');

  const isVisible = {
    display: `${props.show ? 'flex' : 'none'}`
  };

  function _handleSubmit() {
    console.log(state.inputs);
  };

  const { inputs: { email, password } } = state;
  
  return (
    <div id="login" className={`auth-page__content ${props.show ? 'animated fadeIn slow' : ''}`} style={isVisible}>
      <div className="auth-page__content-img"></div>
      <div className="wrapper">
        <form className="form" noValidate onSubmit={handleFormSubmit}>
          <div className="form-group">
            <h3>Sign in</h3>
          </div>
          
          <InputField
            value={email.value}
            placeholder="Enter Email"
            name="email"
            handlechange={handleChange}
            error={formErrors && formErrors.email}
            type="email"
          />

          <InputField
            value={password.value}
            placeholder="Enter Password"
            name="password"
            handlechange={handleChange}
            error={formErrors && formErrors.password}
            type="password"
          />

          <div className="form-group">
            <label htmlFor="sdf" style={{ verticalAlign: "middle", fontWeight: '300' }}>
              <input type="checkbox" name="remember-me" id="sdf" className="form__checkbox" /> Remember Password
            </label>
          </div>

          <div className="form-group">
            <Button classes="btn-regular btn-lg">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
