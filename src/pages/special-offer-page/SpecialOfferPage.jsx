import { useParams } from "react-router-dom";
import "./special-offer-page.css";
import { useEffect, useState } from "react";
import Rating from "../../components/rating/Rating";
import ProductDescription from "./ProductDescription";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/apiCalls/cartApiCall";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";

export default function SpecialOfferPage() {
  const { id } = useParams();

  const [specialOffer, setSpecialOffer] = useState(null);

  const [loading, setLoading] = useState(false);

  async function getSpecialOffersById(id) {
    try {
      setLoading(true);
      let res = await axios.get(`http://localhost:5000/specialOffers/${id}`);
      setSpecialOffer(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getSpecialOffersById(id);
    window.scrollTo(0, 0);
  }, []);

  const [imageIndex, setImageIndex] = useState(0);

  const calculatePrice = specialOffer?.price - (specialOffer?.price * specialOffer?.discount) / 100;

  const dispatch = useDispatch();

  const [qty, setQty] = useState("1");

  if (loading) return <Spinner />;

  return (
    <>
      <div className="special-offer-page">
        <div className="special-offer-page-img-wrapper">
          <img src={specialOffer?.images[imageIndex]} alt={specialOffer?.title} className="special-offer-page-img" />
          <div className="special-offer-page-select-img">
            {specialOffer?.images.map((source, index) => (
              <img
                onClick={() => setImageIndex(index)}
                key={index}
                src={source}
                alt={specialOffer?.title}
                className="select-image"
              />
            ))}
          </div>
        </div>
        <div className="special-offer-page-info">
          <h3 className="special-offer-page-title">{specialOffer?.title}</h3>
          <Rating rating={specialOffer?.rating} reviews={specialOffer?.reviews} />
          <div className="special-offer-page-price">
            <b className="price">${specialOffer?.price}</b>
            <b className="final-price">${calculatePrice}</b>
          </div>
          <div className="special-offer-page-add-to-cart">
            <div>الكمية</div>
            <input value={qty} onChange={(e) => setQty(e.target.value)} type="number" min={1} max={10} />
            <button
              onClick={() => dispatch(addToCart({ ...specialOffer, quantity: qty, image: specialOffer?.images[0] }))}
            >
              إضافة الى سلة التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </>
  );
}
