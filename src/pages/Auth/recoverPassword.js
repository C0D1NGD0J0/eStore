import React from 'react';
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import useAuthForm from "../../utils/hooks/useForm";
import InputField from "../../components/FormElements/inputField";
import Button from "../../components/FormElements/button";
import { connect } from "react-redux";
import { forgotPassword } from "../../actions/auth";

const inputFields = {
  inputs: {
    email: { value: "" }
  }
};

const RecoverPassword = (props) => {
  const { state, handleChange, handleFormSubmit, formErrors, resetState } = useAuthForm(inputFields, _handleSubmit, 'forgotPwd');

  function _handleSubmit(error) {
    const hasErrors = Object.values(error).length > 0;
    const { email } = state.inputs;

    if (!hasErrors) {
      const userdata = { email: email.value };

      props.forgotPassword(userdata, () => {
        resetState();
      });
    };
  };

  const { inputs: { email } } = state;

  return (
    <ContentWrapper>
      <div className="row flex-center">
        <div className="sm-8 col">
          <div className="recover-password">
            <h2>Forgot your password?</h2>
            <p>Enter the email address you signed up with, and we'll send you a link to reset your password</p>

            <form className="form" noValidate onSubmit={handleFormSubmit}>
              <InputField
                value={email.value}
                placeholder="Enter Email"
                name="email"
                handlechange={handleChange}
                error={formErrors && formErrors.email}
                type="email"
              />

              <div className="form-group">
                <Button classes="btn-regular btn-lg">Send Reset Link</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default connect(null, {forgotPassword})(RecoverPassword);