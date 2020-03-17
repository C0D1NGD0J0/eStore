import React from 'react';
import { removeNotification } from "../../actions/notification";
import { connect } from "react-redux";

const Notification = ({notification, removeNotification}) => {
  if (notification.length <= 0){
    return null;
  };

  return (
    notification.map((alert) =>{
      return (
        <div className={`notification-wrapper ${alert.alertType}`} key={alert.id}>
          <div onClick={() => removeNotification(alert.id)}>
            <p key={alert.id}>{alert.msg}</p>
          </div>
        </div>
      );
    })
  );
}

const mapStateToProps = (state) =>({
  notification: state.notification
});

export default connect(mapStateToProps, {removeNotification})(Notification);