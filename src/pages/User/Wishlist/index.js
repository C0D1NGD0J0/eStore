import React from 'react';
import { useSelector } from "react-redux";
import UserSidebarOptions from '../userSidebarOptions';
import ContentWrapper from "../../../components/Layouts/ContentWrapper";
import WishlistCollection from "../../../components/Collection";
import PageHeader from "../../../pages/Store/StoreHeader";

const UserWishList = (props) => {
  const { currentuser } = useSelector(state => state.auth);

  return (
    <ContentWrapper>
      <div className="row" id="userAccount-page">
        <div className="sm-3 col">
          <aside className="sidebar">
            <UserSidebarOptions />
          </aside>
        </div>

        <div className="sm-9 col">
          <PageHeader title="wishlist"/>

          <div class="wishlist">
            <WishlistCollection collection={currentuser.wishlist}/>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default UserWishList;
