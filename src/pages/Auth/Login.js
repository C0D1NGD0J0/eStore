import React from 'react';
import { connect } from "react-redux";
import useAuthForm from "../../utils/hooks/useForm";
import InputField from "../../components/FormElements/inputField";
import Button from "../../components/FormElements/button";
import { userLogin } from "../../actions/auth";

const inputFields = {
  inputs: {
    email: { value: "" },
    password: { value: "" },
  }
};

const Login = (props) => {
  const { state, handleChange, handleFormSubmit, formErrors, resetState } = useAuthForm(inputFields, _handleSubmit, 'login');

  const isVisible = {display: `${props.show ? 'flex' : 'none'}`};
  const cssClass = `auth-page__content ${props.show ? 'animated fadeIn slow' : ''}`;

  function _handleSubmit(error) {
    const hasErrors = Object.values(error).length > 0;
    const { email, password } = state.inputs;

    if (!hasErrors) {
      const userdata = { email: email.value, password: password.value };
      
      props.userLogin(userdata, () => {
        props.history.push("/myaccount");
      });
    };
  };

  const { inputs: { email, password } } = state;
  
  return (
    <div id="login" className={cssClass} style={isVisible}>
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

export default connect(null, {userLogin})(Login);