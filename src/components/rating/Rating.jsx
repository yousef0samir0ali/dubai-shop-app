import "./rating.css";
export default function Rating({ rating, reviews }) {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i}>
        {rating >= i ? (
          <i className="bi bi-star-fill"></i>
        ) : rating >= i - 0.5 ? (
          <i className="bi bi-star-half"></i>
        ) : (
          <i className="bi bi-star"></i>
        )}
      </span>
    );
  }

  return (
    <div className="rating-wrapper">
      <b className="rating">
        {stars} {rating}
      </b>
      <span className="reviews">({reviews} تقييمات)</span>
    </div>
  );
}
