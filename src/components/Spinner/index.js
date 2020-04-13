import React from 'react';
import loaderGif from "./loadingGif.gif";

const Spinner = (props) => {
  return (
    <img src={loaderGif} alt="Loading..." style={{ width: '100px', margin: "10rem auto", display: 'block' }} />
  );
}

export default Spinner;
