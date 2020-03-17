import React, {useEffect, useState} from 'react';
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import useAuthForm from "../../utils/hooks/useForm";
import InputField from "../../components/FormElements/inputField";
import Button from "../../components/FormElements/button";
import { connect } from "react-redux";
import { resetPassword } from "../../actions/auth";
import { createNotification } from "../../actions/notification";

const inputFields = {
  inputs: {
    password: { value: "" },
    password2: { value: "" },
  }
};

const ResetPassword = (props) => {
  const { state, handleChange, handleFormSubmit, formErrors, resetState } = useAuthForm(inputFields, _handleSubmit, 'resetPwd');
  const [resetToken, setResetToken] = useState("");

  useEffect(() =>{
    const { token } = props.match.params;
    if(token && (token.length > 35)){
      return setResetToken(token);
    };

    props.createNotification("Invalid reset token provided", "danger");
    return props.history.push("/auth/recoverpassword");
  }, [resetToken]);

  function _handleSubmit(error) {
    const hasErrors = Object.values(error).length > 0;
    const { password, password2 } = state.inputs;

    if (!hasErrors) {
      const userdata = { password: password.value };

      props.resetPassword(userdata, resetToken, () => {
        props.history.push("/auth");
      });
    };
  };

  const { inputs: { password, password2 } } = state;

  return (
    <ContentWrapper>
      <div className="row flex-center">
        <div className="sm-8 col">
          <div className="recover-password reset">
            <h2>Reset your password</h2>
            <p>Enter your new password below...</p>

            <form className="form" noValidate onSubmit={handleFormSubmit}>
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
                <Button classes="btn-regular btn-lg">Reset Password</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default connect(null, { resetPassword, createNotification })(ResetPassword);