import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.js";


export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});

