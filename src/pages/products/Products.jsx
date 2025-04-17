import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductSideBar from "./ProductSideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import "./products.css";
import Pagination from "./pagination/Pagination";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [filterItem, setFilterItem] = useState("all");
  const [sortItem, setSortItem] = useState("select");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter Product

  const filteredProduct = products.filter((product) =>
    filterItem === "laptop" ? product.isLaptop === true : filterItem === "mobile" ? product.isLaptop === false : product
  );

  //Sort Product

  const sortedProduct =
    sortItem === "low"
      ? filteredProduct.sort((a, b) => a.price - b.price)
      : sortItem === "high"
      ? filteredProduct.sort((a, b) => b.price - a.price)
      : filteredProduct.sort((a, b) => (a.title > b.title ? 1 : -1));

  //Pagination

  const PRODUCT_PER_PAGE = 3;
  const pages = Math.ceil(sortedProduct.length / PRODUCT_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;
  const finalProducts = sortedProduct.slice(startIndex, finishIndex);

  return (
    <>
      <div className="products">
        <ProductSideBar
          filterItem={filterItem}
          setFilterItem={setFilterItem}
          sortItem={sortItem}
          setSortItem={setSortItem}
        />
        <ProductList products={finalProducts} />
      </div>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}
