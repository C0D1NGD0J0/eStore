import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const createOrder = async (orderData) => {
  try {
    await axios.post(`${REACT_APP_API_URL}/orders`, orderData);
  } catch (err) {
    console.log("Order Error: ", err.response);
  };
};

export const getOrderDetails = async (orderid) =>{
  try {
    const res = await axios.get(`${REACT_APP_API_URL}/orders/${orderid}`);
    return res.data.order;
  } catch (err) {
    console.log("Order Error: ", err.response);
  };
};