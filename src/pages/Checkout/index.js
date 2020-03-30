import React, { useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import OrderSummary from '../Cart/OrderSummary';
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import { getClientPaymentToken, processPayment } from "../../actions/checkout";
import { createOrder } from "../../actions/order";
import { emptyCart } from "../../actions/cart";
import Geocode from "react-geocode";
import DropIn from "braintree-web-drop-in-react";
import { selectCartItemsTotal, selectCartItems } from "../../selectors/cartSelector";
import { createNotification } from "../../actions/notification";

const reducer = (state, action) =>{
  const { type, payload } = action;

  switch (type) {
    case "SET_TOKEN":
      return{
        ...state,
        clientToken: payload
      };
    case "SET_ADDRESS":
      return {
        ...state,
        ...payload
      };
    case 'SET_ERROR':
      return {
        ...state, 
        errors: {
          msg: payload
        }
      }
    default:
      return state;
  };
};

const Checkout = (props) => {
  const _dispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, {
    clientToken: "",
    instance: {},
    address: "",
    note: "",
    errors: null
  });
  const cartTotal = useSelector((state) => selectCartItemsTotal(state));
  const cartItems = useSelector((state) => selectCartItems(state));

  useEffect(() =>{
    if (cartTotal <= 0 || !props.location.state ) {
      return props.history.push("/cart");
    };

    async function fetchClientToken(){
      try {
        const res = await getClientPaymentToken();
        Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

        return dispatch({
          type: "SET_TOKEN",
          payload: res.clientToken
        });
      } catch (error) {
        return console.log("Checkout Err: ", error);
      };
    };

    fetchClientToken();
  }, [cartTotal]);

  const purchase = async () => {
    try {
      let { nonce } = await state.instance.requestPaymentMethod();
      let { orderTotal } = props.location.state;
      const paymentInfo = {nonce, orderTotal};
      
      return processPayment(paymentInfo, (btResponse) =>{
        const orderData = {
          items: cartItems,
          transactionId: btResponse.id,
          purchaseTotal: btResponse.amount,
          address: state.address,
          costBreakdown: orderTotal
        };

        _dispatch(createNotification("Payment was successful", "success"));
        createOrder(orderData); //create new order in db
        
        //Clear cart and link state
        _dispatch(emptyCart());
        props.history.replace({ pathname: props.location.pathname, state: null });

        //redirect user to account page
        props.history.push("/myaccount");
      });
    } catch (error) {
      console.log(error);
    };
  };

  const handleChange = async (evt) =>{
    const {value, name} = evt.target;
    
    dispatch({
      type: "SET_ADDRESS",
      payload: {[name]: value}
    });
  };

  const fetchAddress = async (address) => {
    const res = await Geocode.fromAddress(address);
    dispatch({
      type: "SET_ADDRESS",
      payload: { address: res.results[0].formatted_address }
    });
  };

  const handleBlur = async () => {
    if(state.address){
      await fetchAddress(state.address)
    };
  }

  const mystyle = {
    width: "100%",
    margin: "2rem 0",
    fontSize: "1.6rem",
    padding: "2rem",
    border: "1px solid #ddd"
  };

  const dispalyPaymentScreen = (token) =>{
    if(token){
      return (
        <div>
          <DropIn options={{authorization: token}} onInstance={instance => (state.instance = instance)}/>
          <div className="form">
            <input type="text" name="address" value={state.address} onChange={handleChange} placeholder="Enter delivery address..." style={mystyle} onBlur={handleBlur} />

            <textarea name="note" value={state.note} onChange={handleChange} rows="5" style={mystyle} placeholder="Delivery note" />
          </div>
          {
            state.address && state.errors === null ? 
            <button onClick={purchase} className="btn-regular btn-lg">Checkout</button> : null 
          }
          <br/>
          <div className="page-title">
            <h3 className="text-danger">Credit Card number: 4111 1111 1111 1111</h3>
            <h4 className="text-danger">11/22 (EXP Date)</h4>
            <p>Please DO NOT PROVIDE AN ACTUAL C.C </p>
          </div>
        </div>
      );
    };
  };

  return (
    <ContentWrapper>
      <div className="row" id="cart-page">
        <div className="sm-8 col">
          <div className="cart animated fadeInLeft">
            <div className="page-title">
              <h2>Checkout</h2>
            </div>

            {dispalyPaymentScreen(state.clientToken)}
          </div>
        </div>

        <div className="sm-4 md-4 col">
          <div className="cart-sidebar animated fadeInRight">
            <OrderSummary cartTotal={cartTotal} displayBtn={false} />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Checkout;