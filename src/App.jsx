import Header from "./components/header/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/single-product/SingleProduct";
import SpecialOfferPage from "./pages/special-offer-page/SpecialOfferPage";
import ScrollToTop from "./components/ScrollToTop";
import Women from "./pages/women/Women";
import Kitchen from "./pages/kitchen/Kitchen";
import Men from "./pages/men/Men";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter basename="/dubai-shop-app">
        <ToastContainer autoClose={3000} />
        {/* <ScrollToTop /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/special-offer/:id" element={<SpecialOfferPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
