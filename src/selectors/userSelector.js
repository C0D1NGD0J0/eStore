import { createSelector } from 'reselect'

//input selector
const selectCurrentuser = (state) => state.auth.currentuser;

export const selectUserWishlist = createSelector([selectCurrentuser], (user) => user.wishlist);

export const isAlreadySelected = (item) => createSelector(
  [selectUserWishlist],
  (wishlist, item) => {
  //const ismatch = wishlist.find((product) => product._id === item);
  //return ismatch;
  console.log(wishlist, item)
});