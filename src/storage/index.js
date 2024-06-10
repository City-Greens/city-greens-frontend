import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products.js";
import { cartReducer } from "./cart.js";

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
