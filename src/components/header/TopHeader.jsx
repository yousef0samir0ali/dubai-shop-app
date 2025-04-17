import ShoppingCart from "../shopping-cart/ShoppingCart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TopHeader({ setToggle }) {
  const [isFixed, setIsFixed] = useState(false);
  const headerHeight = 250;

  const handleScroll = () => {
    setIsFixed(window.scrollY > headerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`top-header ${isFixed ? "fixed" : ""}`}>
      <div onClick={() => setToggle(true)} className="menu">
        <i className="bi bi-list"></i>
      </div>
      <Link to={"/"} className="logo" onClick={() => window.scrollTo(0, 0)}>
        <i className="bi bi-basket2"></i> دبي مول
      </Link>
      <div className="text">اهلا و سهلا بكم</div>

      {isFixed ? (
        <ShoppingCart Fixed="fixed" />
      ) : (
        <a href="tel:+963 997705460" className="phone">
          اتصل بنا <i className="bi bi-telephone"></i>
        </a>
      )}
    </div>
  );
}
