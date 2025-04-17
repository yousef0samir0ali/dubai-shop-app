import { Link, NavLink } from "react-router-dom";

export default function Navbar({ setToggle, toggle }) {
  return (
    <nav className="navbar" style={{ right: toggle && 0 }}>
      <div className="close">
        <i onClick={() => setToggle(false)} className="bi bi-x-lg"></i>
      </div>
      <ul>
        <NavLink to={"/"} onClick={() => setToggle(false)} className="navbar-link">
          الصفحة الرئيسة
        </NavLink>
        <NavLink to={"/products"} onClick={() => setToggle(false)} className="navbar-link">
          الإلكترونيات و الموبايلات
        </NavLink>
        <NavLink to={"/kitchen"} onClick={() => setToggle(false)} className="navbar-link">
          المنزل والمطبخ
        </NavLink>
        <NavLink to={"/men"} onClick={() => setToggle(false)} className="navbar-link">
          رجالية
        </NavLink>
        <NavLink to={"/women"} onClick={() => setToggle(false)} className="navbar-link">
          نسائية
        </NavLink>
      </ul>
      <Link to={"/login"} className="login">
        تسجيل الدخول <i className="bi bi-person-fill"></i>
      </Link>
    </nav>
  );
}
