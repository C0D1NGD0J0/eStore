import { useEffect, useReducer } from "react";

const authReducer = (state, action) => {
  const {payload, type} = action;

  switch (type) {
    case 'ON_INPUT_CHANGE':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...payload.inputs
        },
        isFormValid: payload.isFormValid
      };
    default:
      return state;
  }
};

const useAuthForm = (initialInputs) =>{
  const [state, dispatch] = useReducer(authReducer, initialInputs);
  
  const handleChange = (evt) =>{
    const { name, value } = evt.target;
    dispatch({ 
      type: 'ON_INPUT_CHANGE', 
      payload: { 
        inputs: {
          [name]: { value, isValid: (value === "" ? false : true) }
        },
        isFormValid: Object.values(state.inputs).every((item) => item.isValid === true)
      }
    });
  };

  return [state, handleChange];
};

export default useAuthForm;