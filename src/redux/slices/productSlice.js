import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productsLoading: true,
    product: null,
    loading: false,
    specialOffers: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProductsLoading(state) {
      state.productsLoading = true;
    },
    clearProductsLoading(state) {
      state.productsLoading = false;
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

    setSpecialOffers(state, action) {
      state.specialOffers = action.payload;
    },
  },
});
const productActions = productSlice.actions;
const productReducer = productSlice.reducer;

export { productActions, productReducer };
