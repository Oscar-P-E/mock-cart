import { fetchCart } from "../data/data";
import { Product, Cart } from "../data/types";
import { useCart } from "../CartContext/useCart";

const RemoveFromCartBtn = ({ id }: { id: Product["id"] }) => {
  const { updateCartCount } = useCart();

  const handleClick = (id: Product["id"]) => {
    return () => {
      fetchCart().then((cart: Cart) => {
        const newCart = cart.filter((product) => product.id !== id);
        localStorage.setItem("cart", JSON.stringify(newCart));
        updateCartCount();
      });
    };
  };

  return (
    <button
      onClick={handleClick(id)}
      className="product-card__button bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
    >
      Remove from Cart
    </button>
  );
};

export default RemoveFromCartBtn;
