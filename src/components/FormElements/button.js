import React from 'react';

const CustomButton = ({ children, classes, type, disabled }) => {
  
  return (
    <button type={type} className={`${classes}`} disabled={disabled.toString()}>
      {children}
    </button>
  );
};

CustomButton.displayName = 'CustomButton';

CustomButton.defaultProps = {
  type: "submit"
};

export default CustomButton;