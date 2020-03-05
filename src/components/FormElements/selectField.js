import React from 'react';
import classnames from 'classnames';

const SelectTagField = ({ name, value, onchange, options }) => {
  let optionsField = options && options.map((item, i) => {
    return (
      <option value={(item._id || item.toString())} key={(item._id || i)}>{(item.name || item.toString())}</option>
    );
  });

  return (
    <div className="form-group">
      <select value={value} name={name} onChange={onchange} className="sortOptions">
        <option value="" disabled>Select from options...</option>
        {optionsField}
      </select>
    </div>
  );
};

export default SelectTagField;