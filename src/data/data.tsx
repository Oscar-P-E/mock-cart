import { Products } from "./types";

const fetchCart = async (): Promise<Products | []> => {
  const data = await JSON.parse(localStorage.getItem("cart") || "[]");
  return data || [];
};

const fetchProducts = async (): Promise<Products | []> => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data || [];
};

export { fetchCart, fetchProducts };
