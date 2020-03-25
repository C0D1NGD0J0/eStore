import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const createOrder = async (orderData) => {
  try {
    await axios.post(`${REACT_APP_API_URL}/orders`, orderData);
  } catch (err) {
    console.log("Order Error: ", err.response);
  };
};