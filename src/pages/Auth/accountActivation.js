import React, {useState, useEffect} from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { activateAccount } from "../../actions/auth";
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import { createNotification } from "../../actions/notification";

const AccountActivation = (props) => {
  const [isTokenValid, setTokenValidity] = useState(false);
  const { token } = props.match.params;
  const minTokenLength = 5;

  useEffect(() =>{
    if (token.length < minTokenLength || !token) {
      return props.createNotification("Invalid activation token provided", "danger");
    };

    //send request with token
    setTokenValidity(true);
    props.activateAccount(token);
  });

  if (!isTokenValid) {
    return <Redirect to="/auth" />
  };
  
  return (
    <ContentWrapper>
      <div className="accountActivation">
        <div className="accountActivation__content">
          <h1>Welcome,</h1>
          <p>Thanks for signing up, get ready for special offers, tips and information about the wworld of luxury goods. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aliquid facilis eligendi voluptatibus perspiciatis nisi sequi hic nostrum perferendis magnam? Et provident dolor asperiores magni!</p><br/>
          <Link to="/store" className="btn btn-regular">Start Shopping</Link>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default connect(null, {createNotification, activateAccount})(AccountActivation);