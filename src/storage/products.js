import { createAction, createReducer } from "@reduxjs/toolkit";
const vite_backend_url = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  products: [],
  products_names: [],
  search_term: "",
};

export const getProducts = createAction("GET_PRODUCTS");
export const getSearchedProducts = createAction("GET_SEARCHED_PRODUCTS");

export const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("GET_PRODUCTS", (state, action) => {
      state.products = action.payload;
    })
    .addCase("GET_SEARCHED_PRODUCTS", (state, action) => {
      state.search_term = action.payload;
    });
});

export const fetchProducts = async (dispatch) => {
  try {
    const response = await fetch(`${vite_backend_url}/all-products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const products = await response.json();
    dispatch(getProducts(products));
  } catch (err) {
    console.error(err);
  }
};
