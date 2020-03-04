import React, { Fragment } from 'react';

const SidebarBox = (props) => {
    const li_checkBoxType = (data) =>{
      return (
        <li>
          <label htmlFor={data.id}>{data.label}</label>
          <input type="checkbox" class="form-input__checkbox" id={data.id} />
        </li>
      );
    };

  const li_labelType = (data) => (<li><label>{data.label} <span className="count">(25)</span></label></li>);

  return (
    <div className="sidebar-widget__box">
      <h5>{props.title}</h5>
      <hr width="10%" />
      <ul className="category-list">
        {
          props.options.map((item) =>{
            
          })
        }
      </ul>
    </div>
  );
}

export default SidebarBox;