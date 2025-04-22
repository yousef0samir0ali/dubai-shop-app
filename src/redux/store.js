import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { cartReducer } from "./slices/cartSlice";
import { categoriesReducer } from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    categories: categoriesReducer,
  },
});
export default store;
