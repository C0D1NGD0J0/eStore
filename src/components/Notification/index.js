import React from 'react';
import { removeNotification } from "../../actions/notification";
import { connect } from "react-redux";
import ReactWOW from 'react-wow';

const Notification = ({notification, removeNotification}) => {
  if (notification.length <= 0){
    return null;
  };

  return (
    notification.map((alert) =>{
      return (
        <ReactWOW animation="fadeInDown" key={alert.id}>
          <div className={`notification-wrapper ${alert.alertType}`}>
            <div>
              <span className="notification-close" onClick={() => removeNotification(alert.id)}>&times;</span>
              <p key={alert.id}>{alert.msg}</p>
            </div>
          </div>
        </ReactWOW>
      );
    })
  );
}

const mapStateToProps = (state) =>({
  notification: state.notification
});

export default connect(mapStateToProps, {removeNotification})(Notification);