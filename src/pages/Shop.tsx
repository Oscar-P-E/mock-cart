import { useState, useEffect } from "react";
import { Products } from "../types";

import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then((products: Products) => setProducts(products))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <div>Error occured</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="">
      <ul className="grid grid-cols-2">
        {products?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} context="shop" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
