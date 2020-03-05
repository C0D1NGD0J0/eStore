import React from 'react';
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import AuthHeader from './authHeader';

const Auth = (props) => {
  return (
    <ContentWrapper>
      <div className="row" id="auth-page">
        <div className="sm-12 col">
          <AuthHeader />

          <div className="auth-page">
            <Login show="false" />
            <Register show="true" />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Auth;
