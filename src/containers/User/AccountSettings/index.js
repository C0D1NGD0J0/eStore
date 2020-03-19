import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/Layouts/ContentWrapper";
import UserSidebarOptions from '../userSidebarOptions';
import ProfileSettingForm from "./profileSettingForm";

const AccountSettings = (props) => {
  const { currentuser } = useSelector(state => state.auth);
  
  return (
    <ContentWrapper>
      <div className="row">
        <div className="sm-3 col">
          <div className="sidebar">
            <UserSidebarOptions />
          </div>
        </div>

        <div className="sm-9 col" id="userAccount-page">
          <div className="account-settings">
            <ProfileSettingForm currentuser={currentuser}/>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default AccountSettings;
