import { Link } from "react-router-dom";
import "./shopping-cart.css";
import { useSelector } from "react-redux";
export default function ShoppingCart({ Fixed }) {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Link to={"/cart"} className={`shopping-cart ${Fixed}`}>
      سلة التسوق <i className="bi bi-cart3"></i>
      {cartItems.length > 0 && <span className="notification">{cartItems.length}</span>}
    </Link>
  );
}
