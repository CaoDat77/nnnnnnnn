import { configureStore } from "@reduxjs/toolkit";
import { addCartReducer } from "./feature/product/product.slice";

const store = configureStore({
  reducer: {
    products: addCartReducer,
  },
});

export default store;
