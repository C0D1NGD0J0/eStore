import React from 'react';

const StoreSidebar = (props) => {
  return (
    <div className="sidebar-widget">
      <div className="sidebar-widget__box">
        <h5>Category</h5>
        <hr width="10%" />
        <ul className="category-list">
          <li><label>Sound Systems <span className="count">(25)</span></label></li>
          <li><label>Furniture <span className="count">(25)</span></label></li>
          <li><label>Electronics <span className="count">(35)</span></label></li>
          <li><label>Accessories <span className="count">(60)</span></label></li>
        </ul>
      </div>

      <div class="sidebar-widget__box">
        <h5>Price</h5>
        <hr width="10%" />
        <ul class="category-list">
          <li>
            <label for="_500">$0.00 - $500.00</label>
            <input type="checkbox" class="form-input__checkbox" id="_500" />
          </li>
          <li>
            <label>$500.00 - $1000.00</label>
            <input type="checkbox" class="form-input__checkbox" />
          </li>
          <li>
            <label>$1000.00 - $1500.00</label>
            <input type="checkbox" class="form-input__checkbox" />
          </li>
          <li>
            <label>$1501.00 - $2499.00</label>
            <input type="checkbox" class="form-input__checkbox" />
          </li>
          <li>
            <label>$2500 - $5000.00</label>
            <input type="checkbox" class="form-input__checkbox" />
          </li>
        </ul>
      </div>

      <div class="sidebar-widget__box">
        <h5>Brands</h5>
        <hr width="10%" />
        <ul class="category-list">
          <li>
            <label for="bose">Bose</label>
            <input type="checkbox" class="form-input__checkbox" id="bose" />
          </li>
          <li>
            <label>Maxwell</label>
            <input type="checkbox" class="form-input__checkbox" />
          </li>
          <li>
            <label>Bang&Olufsen</label>
            <input type="checkbox" class="form-input__checkbox" />
          </li>
          <li>
            <label>Beats</label>
            <input type="checkbox" class="form-input__checkbox" />
          </li>
          <li>
            <label>JBL</label>
            <input type="checkbox" class="form-input__checkbox" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StoreSidebar;
