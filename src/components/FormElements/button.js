import React from 'react';

const CustomButton = ({ children, classes, type }) => {
  
  return (
    <button type={type} className={`${classes}`}>
      {children}
    </button>
  );
};

CustomButton.displayName = 'CustomButton';

CustomButton.defaultProps = {
  type: "submit"
};

export default CustomButton;