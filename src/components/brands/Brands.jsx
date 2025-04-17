import "./brands.css";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Brands() {
  const [brands, setBrands] = useState([]);

  async function getBrands() {
    try {
      let res = await axios.get("http://localhost:5000/brands");
      setBrands(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div className="brands">
      {brands.map((brand, index) => (
        <div className="brand" key={index}>
          <img src={brand.image} alt="brand" className="brand-image" />
        </div>
      ))}
    </div>
  );
}
