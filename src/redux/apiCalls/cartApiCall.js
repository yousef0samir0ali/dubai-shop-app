import { cartAction } from "../../redux/slices/cartSlice";

//Add Item To Cart

export function addToCart(newItem) {
  return (dispatch, getState) => {
    dispatch(cartAction.addItemToCart(newItem));
    const { cart } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  };
}
//Remove Item from Cart

export function removeFromCart(id) {
  return (dispatch) => {
    dispatch(cartAction.removeItemFromCart(id));
  };
}
