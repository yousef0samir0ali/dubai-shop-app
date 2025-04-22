import "./brands.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
export default function Brands() {
  const [brands, setBrands] = useState([]);

  const [loading, setLoading] = useState(true);

  async function getBrands() {
    try {
      let res = await axios.get("https://json-dubai-api.glitch.me/brands");
      setBrands(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBrands();
  }, []);

  const BrandsSkelton = () => {
    return (
      <div className="brands-skeleton">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="brands-skeleton-item" key={index}>
            <Skeleton
              width={"100%"}
              height={110}
              baseColor="#e0e0e0"
              highlightColor="#f5f5f5"
              borderRadius={30}
              style={{ display: "block" }}
            />
          </div>
        ))}
      </div>
    );
  };

  return loading ? (
    <BrandsSkelton />
  ) : (
    <div className="brands">
      {brands.map((brand, index) => (
        <div className="brand" key={index}>
          <img src={brand.image} alt="brand" className="brand-image" />
        </div>
      ))}
    </div>
  );
}
