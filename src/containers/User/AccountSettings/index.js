import React from 'react';
import ContentWrapper from "../../../components/Layouts/ContentWrapper";
import UserSidebarOptions from '../userSidebarOptions';
import PasswordSettingForm from "./passwordSetting";
import ProfileSettingForm from "./profileSettingForm";

const AccountSettings = (props) => {
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
            <ProfileSettingForm />
            <PasswordSettingForm />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default AccountSettings;
