import Rating from "../../components/rating/Rating";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="product-item">
          <img src={product.image} alt={product.title} className="product-item-image" />
          <h3 className="product-item-tile">{product.title}</h3>
          <Rating rating={product.rating} reviews={product.reviews} />
          <div className="product-item-price">${product.price}</div>
        </Link>
      ))}
    </div>
  );
}
