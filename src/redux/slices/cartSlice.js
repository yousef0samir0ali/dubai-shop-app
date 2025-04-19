import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;

      const isItemExist = state.cartItems.find((cartItem) => cartItem.id === newItem.id);

      if (isItemExist) {
        state.cartItems.map((item) => (item.id === newItem.id ? newItem : item));
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }
      toast.success("تم إضافة المنتج الى السلة بنجاح");
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("تم حذف المنتج من السلة بنجاح");
    },
  },
});

const cartReducer = cartSlice.reducer;
const cartAction = cartSlice.actions;

export { cartAction, cartReducer };
