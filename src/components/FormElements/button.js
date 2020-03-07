import React from 'react';

const CustomButton = ({ children, classes, type, disabled }) => {
  // console.log("disabled", disabled.toString());
  return (

    <button type={type} className={`${classes}`} disabled={disabled}>
      {children}
    </button>
  );
};

CustomButton.displayName = 'CustomButton';

CustomButton.defaultProps = {
  type: "submit"
};

export default CustomButton;