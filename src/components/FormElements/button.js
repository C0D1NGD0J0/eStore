import React from 'react';

const CustomButton = ({ children, classes }) => {
  
  return (
    <button className={`${classes}`}>
      {children}
    </button>
  );
};

CustomButton.displayName = 'CustomButton';

export default CustomButton;