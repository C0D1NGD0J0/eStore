import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { createNotification } from "../actions/notification"

const PrivateRoute = ({ currentuser, component: Component, createNotification, ...rest }) => {

  return (
    <Route {...rest} render={props => {
      if (currentuser.isAuthenticated){
        return <Component {...props} />
      } else {
        createNotification("Please login to proceed!", "danger");
        return <Redirect to={{ pathname: "/auth", state: { originPath: props.location.pathname } }} />
      };
    }}/>
  );
};

const mapStateToProps = state => ({
  currentuser: state.auth
});

export default connect(mapStateToProps, {createNotification})(PrivateRoute);