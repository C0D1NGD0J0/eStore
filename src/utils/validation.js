export const validate = (inputs) =>{
  let errors = {};
  const EMAIL_FORMAT = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const login = () =>{
    if (!inputs.email.value) {
      errors.email = "Email address is required!";
    } else if (!EMAIL_FORMAT.test(inputs.email.value)) {
      errors.email = "Email address format is invalid.";
    };

    if (!inputs.password.value) {
      errors.password = "Password is required!";
    } else if (inputs.password.value.length < 6) {
      errors.password = "Password needs to ne more than 6 characters";
    };

    return errors;
  };

  const signup = () =>{
    if (!inputs.firstName.value) {
      errors.firstName = "First name is required!";
    } else if (inputs.firstName.value.length < 3) {
      errors.firstName = "First name has to be longer than 3 characters.";
    };

    if (!inputs.lastName.value) {
      errors.lastName = "Last name is required!";
    } else if (inputs.lastName.value.length < 3) {
      errors.lastName = "Last name has to be longer than 3 characters.";
    };

    if (!inputs.email.value) {
      errors.email = "Email address is required!";
    } else if (!EMAIL_FORMAT.test(inputs.email.value)) {
      errors.email = "Email address format is invalid.";
    };

    if (!inputs.password.value) {
      errors.password = "Password is required!";
    } else if (inputs.password.value.length < 6) {
      errors.password = "Password needs to ne more than 6 characters";
    };

    if (!inputs.password2.value) {
      errors.password2 = "Password Confirmation is required!";
    } else if (inputs.password2.value.length < 6) {
      errors.password2 = "Password2 needs to ne more than 6 characters";
    } else if (inputs.password2.value !== inputs.password.value) {
      errors.password2 = "Password and Password Confirmation don't match";
    };

    return errors;
  };

  const updateUser = () =>{
    if (!inputs.firstName.value) {
      errors.firstName = "First name is required!";
    } else if (inputs.firstName.value.length < 3) {
      errors.firstName = "First name has to be longer than 3 characters.";
    };

    if (!inputs.lastName.value) {
      errors.lastName = "Last name is required!";
    } else if (inputs.lastName.value.length < 3) {
      errors.lastName = "Last name has to be longer than 3 characters.";
    };

    if (!inputs.email.value) {
      errors.email = "Email address is required!";
    } else if (!EMAIL_FORMAT.test(inputs.email.value)) {
      errors.email = "Email address format is invalid.";
    };

    if (!inputs.currentPwd.value) {
      errors.currentPwd = "Current password is required to update account.";
    };

    //if user decided to update password
    if (inputs.password.value) {
      if (inputs.password.value.length < 6) {
        errors.password = "Password needs to ne more than 6 characters";
      };

      if (!inputs.password2.value) {
        errors.password2 = "Password Confirmation is required!";
      } else if (inputs.password2.value !== inputs.password.value) {
        errors.password2 = "Password and Password Confirmation don't match";
      };
    };

    return errors;
  };

  const emailField = () => {
    if (!inputs.email.value) {
      errors.email = "Email address is required!";
    } else if (!EMAIL_FORMAT.test(inputs.email.value)) {
      errors.email = "Email address format is invalid.";
    };

    return errors;
  };

  const passwordFields = () =>{
    if (!inputs.password.value) {
      errors.password = "Password is required!";
    } else if (inputs.password.value.length < 6) {
      errors.password = "Password needs to ne more than 6 characters";
    };

    if (!inputs.password2.value) {
      errors.password2 = "Password Confirmation is required!";
    } else if (inputs.password2.value.length < 6) {
      errors.password2 = "Password2 needs to ne more than 6 characters";
    } else if (inputs.password2.value !== inputs.password.value) {
      errors.password2 = "Password and Password Confirmation don't match";
    };

    return errors;
  };

  return { login, signup, emailField, passwordFields, updateUser };
};