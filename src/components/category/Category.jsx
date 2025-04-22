import "./category.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { getCategories } from "../../redux/apiCalls/categoriesApiCall";

export default function Category() {
  const dispatch = useDispatch();

  const { categories, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const CategorySkelton = () => {
    return (
      <div className="category-skeleton">
        {Array.from({ length: 12 }).map((_, index) => (
          <div className="category-skeleton-item" key={index}>
            <Skeleton
              width={"100%"}
              height={200}
              baseColor="#e0e0e0"
              highlightColor="#f5f5f5"
              borderRadius={10}
              style={{ display: "block" }}
            />
          </div>
        ))}
      </div>
    );
  };

  return loading ? (
    <CategorySkelton />
  ) : (
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
