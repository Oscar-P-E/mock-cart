import { useState, useEffect } from "react";
import { Products } from "../data/types";
import { fetchProducts } from "../data/data";

import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [shopItems, setShopItems] = useState<Products | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setShopItems(data);
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
  if (loading) return <div className="text-center text-2xl font-bold mt-4 text-gray-700">Loading...</div>;

  return (
    <div className="">
      <ul className="grid grid-cols-2">
        {shopItems?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} context="shop" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
