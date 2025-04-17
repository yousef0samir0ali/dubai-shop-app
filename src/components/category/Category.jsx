import "./category.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../redux/apiCalls/productApiCall";

export default function Category() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <img src={category.image} alt={category.title} />
          <b className="title">{category.title}</b>
        </div>
      ))}
    </div>
  );
}
