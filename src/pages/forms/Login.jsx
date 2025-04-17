import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      return toast.error("الرجاء إدخال عنوان بريدك الإلكتروني");
    }
    if (password.trim() === "") return toast.error("الرجاء إدخال كلمة السر");
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h4 className="form-title">تسجيل الدخول الى حسابك</h4>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="البريد الإلكتروني"
          />
          <div className="password-input">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور"
            />
            {showPassword ? (
              <i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i>
            ) : (
              <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon"></i>
            )}
          </div>
          <button type="submit">تسجيل الدخول</button>
        </form>
        <div className="form-footer">
          ليس لديك حساب؟<Link to={"/register"}>سجل الآن</Link>
        </div>
      </div>
    </div>
  );
}
