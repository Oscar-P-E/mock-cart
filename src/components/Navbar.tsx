import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 items-center text-xl font-bold ">
      <ul className="flex flex-row gap-8 py-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./pages/shop">Shop</Link>
        </li>
      </ul>
      <div>
        <Link to="/pages/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
