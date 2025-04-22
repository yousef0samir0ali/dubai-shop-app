import { useState } from "react";
import Rating from "../rating/Rating";
import "./slider.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

export default function Slider({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const { productsLoading } = useSelector((state) => state.product);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else setSlideIndex(slideIndex + 1);
  };

  const SliderSkeleton = () => (
    <div style={{ width: "100%", padding: "10px 20px" }}>
      <Skeleton height={380} baseColor="#e0e0e0" highlightColor="#f5f5f5" borderRadius={15} />
    </div>
  );

  return productsLoading ? (
    <SliderSkeleton />
  ) : (
    <div className="slider-container">
      <button
        onClick={() => handleClick("left")}
        disabled={slideIndex === -(data.length - 1)}
        className="bi bi-chevron-left arrow-left"
      ></button>
      <div className="slider-wrapper" style={{ transform: `translateX(${slideIndex * -280}px)` }}>
        {data.map((item, index) => (
          <Link to={`/product/${item.id}`} className="slide" key={index}>
            <img src={item.image} alt={item.title} className="slide-img" />
            <h3 className="slide-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="slide-price">${item.price}</div>
          </Link>
        ))}
      </div>
      <button
        onClick={() => handleClick("right")}
        disabled={slideIndex === 1}
        className="bi bi-chevron-right arrow-right"
      ></button>
    </div>
  );
}
