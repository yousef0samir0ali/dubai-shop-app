import { useState } from "react";
import "./special-offers.css";
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";
export default function Offer({ offer }) {
  const {
    title,
    firstImage,
    price,
    discount,
    secondImage,
    rating,
    reviews,
    id,
  } = offer;

  const [imageSrc, setImageSrc] = useState(firstImage);

  const finalPrice = price - (discount * price) / 100;

  return (
    <div className="offer">
      <div className="image">
        <img
          onMouseEnter={() => setImageSrc(secondImage)}
          onMouseLeave={() => setImageSrc(firstImage)}
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="info">
        <h5>{title}</h5>
        <Rating rating={rating} reviews={reviews} />
        <div className="price">
          <b className="item">${price}</b>
          <b className="item">${finalPrice}</b>
        </div>
        <Link to={`/special-offer/${id}`} className="see-more">
          شاهد المزيد ...
        </Link>
        <div className="discount">خصم {discount}%</div>
      </div>
    </div>
  );
}
