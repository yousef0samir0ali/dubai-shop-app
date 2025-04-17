import { useParams } from "react-router-dom";
import "./single-product.css";
import Rating from "../../components/rating/Rating";
import ProductDescription from "../../pages/special-offer-page/ProductDescription";
import { useEffect, useState } from "react";
import { getProductById } from "../../redux/apiCalls/productApiCall";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import { addToCart } from "../../redux/apiCalls/cartApiCall";
export default function SingleProduct() {
  const [qty, setQty] = useState("1");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductById(id));
    window.scrollTo(0, 0);
  }, [id]);

  const handleInput = (e) => {
    setQty(e.target.value);
    const value = parseInt(e.target.value);
    if (value > 10) {
      setQty("10");
      console.log("first");
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-image">
          <img src={product?.image} alt={product && product.title} />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className="product-price">${product?.price}</div>
          <div className="product-add-to-cart">
            <div>الكمية</div>
            <input value={qty} onChange={(e) => handleInput(e)} type="number" min={1} max={10} />
            <button onClick={() => dispatch(addToCart({ ...product, quantity: qty }))}>إضافة الى سلة التسوق</button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </div>
  );
}
