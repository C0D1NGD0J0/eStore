import React from 'react';

const SubCategoryOptions = ({ subCategories}) => {
  const _li = subCategories && subCategories.map((item) =>{
    item.slug = item.slug.replace(/_/g, " ");
    
    return(
      <li key={item._id}><label style={{textTransform: "capitalize"}}>{item.slug}</label></li>
    );
  });

  return (
    <div className="sidebar-widget__box">
      <h5>SubCategory</h5>
      <hr width="10%" />
      <ul className="category-list">
        {_li}
      </ul>
    </div>
  );
}

export default SubCategoryOptions;