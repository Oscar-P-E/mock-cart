import { useState, useEffect } from "react";
import { Products } from "../data/types";
import { fetchCart } from "../data/data";

import ProductCard from "../components/ProductCard";

const Cart = () => {
  // const [products, setProducts] = useState<Products | []>([]);
  const [cart, setCart] = useState<Products | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCart();
        setCart(data);
      } catch (error) {
        if (error instanceof Error) setError(error);
        else setError(new Error("An unknown error occured"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error occured</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="">
      <ul className="grid grid-cols-2">
        {cart?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} context="cart" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
