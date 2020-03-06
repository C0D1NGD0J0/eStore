import React from 'react';

const InputField = (props) => {
  const { type, value, placeholder, name, handlechange, error, isRequired } = props;

  return (
    <div className="form-group">
      <input 
        type={type} 
        value={value}
        className="form__input" 
        name={name}
        onChange={handlechange}
        placeholder={placeholder}
        required={isRequired}
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
}

InputField.displayName = 'InputField';

InputField.defaultProps = {
  type: "text",
  isRequired: true
};

export default InputField;