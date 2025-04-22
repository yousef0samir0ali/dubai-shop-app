import axios from "axios";
import { categoriesAction } from "../../redux/slices/categoriesSlice";

export function getCategories() {
  return async (dispatch) => {
    try {
      dispatch(categoriesAction.setLoading());
      let res = await axios.get("https://json-dubai-api.glitch.me/categories");
      dispatch(categoriesAction.setCategories(res.data));
      dispatch(categoriesAction.clearLoading());
    } catch (error) {
      console.log(error);
    }
  };
}
