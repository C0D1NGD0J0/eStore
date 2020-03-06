import React from 'react';
import ReactWOW from 'react-wow';

const OptionsCard = (props) => {
  let item;
  const { category, product, animationClass } = props;
  item = category || product;

  return (
    <ReactWOW animation={animationClass}>
      <div className="content-card">
        <div className="content-card__img">
          <a href="!#">
            <img src={item.imgUrl} alt={item.name} />
          </a>
        </div>
        <div className="content-card__title">
          <a href="!#" className="btn btn-link">{item.name}</a>
        </div>
      </div>
    </ReactWOW>
  );
}

export default OptionsCard;