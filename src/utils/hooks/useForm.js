import { useState, useReducer } from "react";
import { validate } from "../../utils/validation";

const authReducer = (state, action) => {
  const {payload, type} = action;

  switch (type) {
    case 'ON_INPUT_CHANGE':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...payload.inputs
        }
      };
    default:
      return state;
  }
};

const useAuthForm = (initialInputs, handleSubmitCb, formType) =>{
  const [state, dispatch] = useReducer(authReducer, initialInputs);
  const [formErrors, setErrors] = useState({});

  const handleChange = (evt) =>{
    const { name, value } = evt.target;
    dispatch({ 
      type: 'ON_INPUT_CHANGE', 
      payload: { 
        inputs: {
          [name]: { value }
        }
      }
    });
  };
  
  const validateForm = () => {
    let _errors;
    if(formType === 'login'){
      _errors = validate(state.inputs).login();
    } else if(formType === 'register'){
      _errors = validate(state.inputs).signup();
    };

    setErrors({..._errors});
    return _errors;
  };
  
  const handleFormSubmit = (evt) =>{
    evt.preventDefault();
    const error =  validateForm();
    handleSubmitCb(error);
  };

  return { state, handleChange, handleFormSubmit, formErrors };
};

export default useAuthForm;