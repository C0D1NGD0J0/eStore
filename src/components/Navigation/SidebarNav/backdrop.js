import React from 'react';

const backdrop = (props) => {
  return props.isOpen ? <div className="backdrop" onClick={props.handleClick}></div> : null
}

export default backdrop;
