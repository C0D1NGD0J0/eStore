import React from 'react';
import Collection from "../../components/Collection/";
import ContentWrapper from "../../components/Layouts/ContentWrapper";

const WishList = (props) => {
  return (
    <ContentWrapper>
      <div className="row">
        <div className="sm-12 col">
          <div className="page-title">
            <h2>Wishlist</h2><hr width='5%'/>
          </div>

          <div class="wishlist">
            <Collection />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default WishList;
