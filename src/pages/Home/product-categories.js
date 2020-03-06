import React from 'react';
import ReactWOW from 'react-wow';
import CategoryCard from "../../components/Card/MenuCard";

const ProductCategories = (props) => {
  const { categories } = props;
  let animation = "";
  
  return (
    <section className="categories" id="categories">
      <div className="categories-content">
        <div className="content-card-list">
          {
            categories.map((category, idx) =>{
              return <CategoryCard category={category} key={idx} animationClass={"zoomIn"}/>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default ProductCategories;
