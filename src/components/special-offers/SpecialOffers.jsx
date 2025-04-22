import "./special-offers.css";
import Offer from "./Offer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { productActions } from "../../redux/slices/productSlice";
import Skeleton from "react-loading-skeleton";

export default function SpecialOffers() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { specialOffers } = useSelector((state) => state.product);

  async function getSpecialOffers() {
    try {
      setLoading(true);
      let res = await axios.get("https://json-dubai-api.glitch.me/specialOffers");
      dispatch(productActions.setSpecialOffers(res.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSpecialOffers();
  }, []);

  const SpecialOffersSkelton = () => {
    return (
      <div className="special-offers-skeleton">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="special-offers-skeleton-item" key={index}>
            <Skeleton width={"100%"} height={300} baseColor="#e0e0e0" highlightColor="#f5f5f5" borderRadius={10} />
          </div>
        ))}
      </div>
    );
  };

  return loading ? (
    <SpecialOffersSkelton />
  ) : (
    <div className="special-offers">
      <h1 className="special-offers-title">
        عروض كبيرة لليوم
        <span>
          <i className="bi bi-stopwatch"></i>ل 24 ساعة فقط
        </span>
      </h1>
      <div className="special-offers-wrapper">
        {specialOffers.map((offer, index) => (
          <Offer key={index} offer={offer} />
        ))}
      </div>
    </div>
  );
}
