import ShoppingCart from "../shopping-cart/ShoppingCart";

export default function MiddleHeader() {
  return (
    <div className="middle-header">
      <div className="search-box">
        <input type="search" placeholder="ماذا تريد؟" />
        <button>ابحث</button>
      </div>
      <ShoppingCart />
    </div>
  );
}
