import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const addToCart = createAction("ADD_TO_CART");

export const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase("ADD_TO_CART", (state, action) => {
    state.cart.push(action.payload);
  });
});
