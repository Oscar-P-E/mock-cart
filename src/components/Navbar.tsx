import { Link } from "react-router-dom";

const cart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 items-center text-xl font-bold pb-4 border-b">
      <ul className="flex flex-row gap-8 py-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./pages/shop">Shop</Link>
        </li>
      </ul>
      <div>
        <Link to="/pages/cart">
          🛒 Cart{cart.length > 0 ? ` ${cart.length}` : ""}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
