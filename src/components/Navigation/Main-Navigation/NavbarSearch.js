import React, { useState } from 'react';
import { searchForProduct } from "../../../actions/product";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const NavbarSearch = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    query: ""
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({ [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(history);
  };

  return (
    <div className="header-search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search Product" className="search-form__input" value={state.query} onChange={handleChange} />
        <button className="search-btn"><i className="fas fa-search"></i></button>
      </form>
    </div>
  );
}

export default NavbarSearch;