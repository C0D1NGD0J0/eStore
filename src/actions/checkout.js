import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const getClientPaymentToken = async () =>{
  try {
    const res = await axios.get(`${REACT_APP_API_URL}/payments/generate_client_token`);
    return res.data;
  } catch (error) {
    return error;
  };
};

export const processPayment = async (orderInfo, cb) =>{
  try {
    const res = await axios.post(`${REACT_APP_API_URL}/payments/`, orderInfo);
    if(res.data.success){
      return cb();
    };
  } catch (error) { 
    console.log("Payment: ", error);
  };  
};