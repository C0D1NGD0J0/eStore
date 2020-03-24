import React, { useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import OrderSummary from '../Cart/OrderSummary';
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import { getClientPaymentToken, processPayment } from "../../actions/checkout";
import { emptyCart } from "../../actions/cart";
import DropIn from "braintree-web-drop-in-react";
import { selectCartItemsTotal } from "../../selectors/cartSelector";
import { createNotification } from "../../actions/notification";

const reducer = (state, action) =>{
  const { type, payload } = action;

  switch (type) {
    case "SET_TOKEN":
      return{
        ...state,
        clientToken: payload
      };
    default:
      return state;
  };
};

const Checkout = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    clientToken: "",
    instance: {},
    address: ""
  });
  const cartTotal = useSelector((state) => selectCartItemsTotal(state));
  const _dispatch = useDispatch();

  useEffect(() =>{
    if (cartTotal <= 0) {
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
      
      return processPayment(paymentInfo, () =>{
        _dispatch(createNotification("Payment was successful", "success"));
        props.history.replace({ pathname: props.location.pathname, state: null });
        _dispatch(emptyCart());
      });
    } catch (error) {
      _dispatch(createNotification(Object.values(error), "danger"));
    };
  };

  const dispalyPaymentScreen = (token) =>{
    if(token){
      return (
        <div>
          <DropIn options={{authorization: token}} onInstance={instance => (state.instance = instance)}/>
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