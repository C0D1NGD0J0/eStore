import React, {useState} from 'react';
import Collection from "../../components/Collection/";
import ContentWrapper from "../../components/Layouts/ContentWrapper";
import { useSelector } from "react-redux";

const WishList = (props) => {
  const {currentuser} = useSelector((state) => state.auth);
  
  return (
    <ContentWrapper>
      <div className="row">
        <div className="sm-12 col">
          <div className="page-title">
            <h2>Wishlist</h2><hr width='5%'/>
            <p>Create an account to save items in your wishlist.</p>
          </div>

          <div className="wishlist">
            <Collection collection={currentuser ? currentuser.wishlist : []}/>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default WishList;