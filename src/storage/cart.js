import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  customer: {},
};

export const addToCart = createAction("ADD_TO_CART");
export const removeFromCart = createAction("REMOVE_FROM_CART");
export const clearCart = createAction("CLEAR_CART");
export const setCustomer = createAction("SET_CUSTOMER");

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    })
    .addCase(removeFromCart, (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload,
      );
      if (itemIndex >= 0) {
        if (state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity -= 1;
        } else {
          state.cart.splice(itemIndex, 1);
        }
      }
    })
    .addCase(clearCart, (state) => {
      state.cart = [];
    })
    .addCase(setCustomer, (state, action) => {
      state.customer = action.payload;
    });
});
