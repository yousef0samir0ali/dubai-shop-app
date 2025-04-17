import "./special-offers.css";
import Offer from "./Offer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { productActions } from "../../redux/slices/productSlice";

export default function SpecialOffers() {
  const dispatch = useDispatch();

  const { specialOffers } = useSelector((state) => state.product);

  async function getSpecialOffers() {
    try {
      let res = await axios.get("https://json-dubai-api.glitch.me/specialOffers");
      dispatch(productActions.setSpecialOffers(res.data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSpecialOffers();
  }, []);

  return (
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
