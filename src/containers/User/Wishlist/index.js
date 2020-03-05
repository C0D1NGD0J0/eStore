import React from 'react';
import UserSidebarOptions from '../userSidebarOptions';
import ContentWrapper from "../../../components/Layouts/ContentWrapper";
import WishlistCollection from "../../../components/Collection";
import PageHeader from "../../../pages/Store/StoreHeader";

const userWishList = (props) => {
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
            <WishlistCollection />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default userWishList;
