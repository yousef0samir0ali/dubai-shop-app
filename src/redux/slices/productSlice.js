import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: null,
    loading: false,
    categories: [],
    specialOffers: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setSpecialOffers(state, action) {
      state.specialOffers = action.payload;
    },
  },
});
const productActions = productSlice.actions;
const productReducer = productSlice.reducer;

export { productActions, productReducer };
