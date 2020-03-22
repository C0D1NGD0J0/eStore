import { createSelector } from 'reselect'

//input selector
const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.items);

export const selectCartItemsCount = createSelector([selectCartItems], (cartitems) =>{
  return cartitems.reduce((total, current) => (total + current.qty), 0)
});

export const selectCartItemsTotal = createSelector([selectCartItems], (cartitems) =>{
  return cartitems.reduce((total, item) => (total + item.qty * item.price), 0);
});