import React, { useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import OrderSummary from '../Cart/OrderSummary';
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import { getClientPaymentToken, processPayment } from "../../actions/checkout";
import { createOrder } from "../../actions/order";
import { emptyCart } from "../../actions/cart";
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
    address: ""
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
          total: btResponse.amount,
          address: state.address
        };

        _dispatch(createNotification("Payment was successful", "success"));
        createOrder(orderData); //create new order in db
        
        //Clear cart and link state
        _dispatch(emptyCart());
        props.history.replace({ pathname: props.location.pathname, state: null });
      });
    } catch (error) {
      console.log(error);
    };
  };

  const handleChange = (evt) =>{
    const {value, name} = evt.target;

    dispatch({
      type: "SET_ADDRESS",
      payload: {[name]: value}
    });
  };

  const mystyle = {
    width: "70%",
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
            <textarea name="address" value={state.address} onChange={handleChange} placeholder="Enter delivery address..." style={mystyle} rows="3"/>
          </div>

          <button onClick={purchase} className="btn-regular btn-lg">Checkout</button>
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