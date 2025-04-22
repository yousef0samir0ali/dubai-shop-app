import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
  },
});
const categoriesAction = categoriesSlice.actions;
const categoriesReducer = categoriesSlice.reducer;

export { categoriesAction, categoriesReducer };
