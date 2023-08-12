import { useCart } from "../CartContext/useCart";

import ProductCard from "../components/ProductCard";

const Cart = () => {
  const { cart } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="text-center mt-10 text-2xl font-bold text-gray-700">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <ul className="grid grid-cols-1">
        {cart.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} context="cart" />
          </li>
        ))}
      </ul>
      <div className="font-sans sticky top-10 flex flex-col justify-start items-center h-fit mt-10 mr-10 ml-auto bg-gray-100 p-8 pb-12 rounded-lg shadow-lg w-3/4">
        <div className="text-2xl font-bold text-gray-700 mb-4">
          Total: ${cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mb-4 w-5/6">
          Checkout
        </button>
        <button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mb-4 w-5/6">
          Clear cart
        </button>
        <button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded w-5/6">
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
