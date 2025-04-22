import axios from "axios";
import { productActions } from "../slices/productSlice";

export function fetchProducts() {
  return async (dispatch) => {
    try {
      // dispatch(productActions.setProductsLoading());
      let res = await fetch("https://json-dubai-api.glitch.me/products");
      const data = await res.json();
      dispatch(productActions.setProducts(data));
      dispatch(productActions.clearProductsLoading());
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductById(productId) {
  return async (dispatch) => {
    try {
      dispatch(productActions.setLoading());
      let res = await axios.get(`https://json-dubai-api.glitch.me/products/${productId}`);
      dispatch(productActions.setProduct(res.data));
      dispatch(productActions.clearLoading());
    } catch (error) {
      console.log(error);
      dispatch(productActions.clearLoading());
    }
  };
}
