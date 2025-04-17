import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { removeFromCart } from "../../redux/apiCalls/cartApiCall";
import { Link } from "react-router-dom";
export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h1>سلة التسوق الخاصه بك فارغة</h1>
          <p>لا يوجد سلع</p>
          <Link to={"/products"} className="empty-cart-link">
            صفحة السلع
          </Link>
        </div>
      ) : (
        <div className="cart">
          <h1 className="cart-title">سلة التسوق</h1>
          <div className="cart-wrapper">
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-item-quantity">
                      الكمية:
                      <span>{item.quantity}</span>
                    </div>
                    <div className="cart-item-price">
                      السعر:
                      <span>${item.price * item.quantity}</span>
                    </div>
                  </div>
                  <i onClick={() => dispatch(removeFromCart(item.id))} className="bi bi-trash cart-item-delete"></i>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-summary-text">
                <i className="bi bi-check-circle-fill"></i>
                جزء من طلبك مؤهل للشحن المجاني. قم بتحديد هذا الخيار عند دفع التفاصيل
              </div>
              <div className="cart-summary-total">
                المجموع:
                <span>${cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}</span>
              </div>
              <button className="cart-summary-btn">تابع عملية الشراء</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
