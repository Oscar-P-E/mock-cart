import { fetchProducts, fetchCart } from "../data/data";
import { Product, Cart } from "../data/types";
import { useCart } from "../CartContext/useCart";

const AddToCartBtn = ({ id }: { id: Product["id"] }) => {
  const { updateCartCount } = useCart();

  const handleClick = (id: Product["id"]) => {
    return () => {
      fetchProducts().then((products) => {
        const product = products.find((product) => product.id === id);
        fetchCart().then((cart: Cart) => {
          const cartItem = cart.find((item) => item.id === id);
          if (!cartItem && product) {
            cart.push({ ...product, quantity: 1 });
          } else if (cartItem && product) {
            cartItem.quantity += 1;
          } else if (!product) {
            throw new Error("Product not found");
          } else {
            throw new Error("Something went wrong");
          }
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartCount();
        });
      });
    };
  };

  return (
    <button
      onClick={handleClick(id)}
      className="mx-4 product-card__button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
