import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { getSubCategories } from "../../../actions/category";
import SubCategoryOptions from './subCategory';

const StoreSidebar = (props) => {
  
  return (
    <div className="sidebar-widget">
      {
        props.subCategories ? <SubCategoryOptions subCategories={props.subCategories} /> : null
      }

      <div className="sidebar-widget__box">
        <h5>Price</h5>
        <hr width="10%" />
        <ul className="category-list">
          <li>
            <label htmlFor="_500">$0.00 - $500.00</label>
            <input type="checkbox" className="form-input__checkbox" id="_500" />
          </li>
          <li>
            <label>$500.00 - $1000.00</label>
            <input type="checkbox" className="form-input__checkbox" />
          </li>
          <li>
            <label>$1000.00 - $1500.00</label>
            <input type="checkbox" className="form-input__checkbox" />
          </li>
          <li>
            <label>$1501.00 - $2499.00</label>
            <input type="checkbox" className="form-input__checkbox" />
          </li>
          <li>
            <label>$2500 - $5000.00</label>
            <input type="checkbox" className="form-input__checkbox" />
          </li>
        </ul>
      </div>

      <div className="sidebar-widget__box">
        <h5>Brands</h5>
        <hr width="10%" />
        <ul className="category-list">
          <li>
            <label htmlFor="bose">Bose</label>
            <input type="checkbox" className="form-input__checkbox" id="bose" />
          </li>
          <li>
            <label>Maxwell</label>
            <input type="checkbox" className="form-input__checkbox" />
          </li>
          <li>
            <label>Bang&Olufsen</label>
            <input type="checkbox" className="form-input__checkbox" />
          </li>
          <li>
            <label>Beats</label>
            <input type="checkbox" className="form-input__checkbox" />
          </li>
          <li>
            <label>JBL</label>
            <input type="checkbox" className="form-input__checkbox" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StoreSidebar;
