import React, {useState, useEffect} from 'react';
import { getCategories } from "../../../actions/category";
import { Link } from "react-router-dom";

const NavbarCategoryLinks = (props) => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() =>{
    const fetchCategories = async () =>{
      const _categories = await getCategories();
      if (_categories) {
        return setCategories([..._categories]);
      };
    };

    fetchCategories();
  }, []);

  const _li = categories.map((item,idx) =>{
    const toOpts = {
      pathname: `/store/cat/${item.slug}`,
      state: item._id
    };

    return (
      <li className="menu-list__item" key={idx}>
        <Link to={toOpts} className="menu-list__link">{item.name}</Link>
      </li>
    )
  });
  
  return (
    <div className="header-menu">
      <ul className="menu-list">
        {_li}
      </ul>
    </div>
  );
}

export default NavbarCategoryLinks;
