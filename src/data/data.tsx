import { Products, Cart } from "./types";

const fetchProducts = async (): Promise<Products> => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const fetchCart = async (): Promise<Cart> => {
  const data = await JSON.parse(localStorage.getItem("cart") || "[]");
  return data;
};

export { fetchCart, fetchProducts };
