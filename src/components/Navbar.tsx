import { Link } from "react-router-dom";
import { useCart } from "../CartContext/useCart";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <div className="flex justify-between px-4 items-center text-xl font-bold pb-4 border-b">
      <ul className="flex flex-row gap-8 py-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pages/shop">Shop</Link>
        </li>
      </ul>
      <div>
        <Link to="/pages/cart">
          🛒 Cart{cartCount > 0 ? ` (${cartCount})` : ""}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
