import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const getCategories = async () =>{
  try {
    const res = await axios.get(`${REACT_APP_API_URL}/categories/`);
    return res.data.categories;
  } catch (err) {
    console.log("Categories Error: ", err.response.data.errors);
  };
};

export const getSubCategories = async (parentId) => {
  if(parentId){
    try {
      const res = await axios.get(`${REACT_APP_API_URL}/categories/${parentId}/sub_categories`);
      return res.data.subCategories;
    } catch (err) {
      console.log("Categories Error: ", err.response.data.errors);
    };
  };
};