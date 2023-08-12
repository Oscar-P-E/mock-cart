import React, { createContext, useEffect, useState } from "react";
import { fetchCart } from "../data/data";
import { Cart } from "../data/types";

export type CartContextType = {
  cart: Cart;
  cartCount: number;
  updateCartCount: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart>([]);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = async () => {
    const fetchedCart = await fetchCart();
    setCart(fetchedCart);
    setCartCount(fetchedCart.length);
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  return (
    <CartContext.Provider value={{ cart, cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
