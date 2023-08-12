type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type Products = Product[];

type CartItem = Product & { quantity: number };

type Cart = CartItem[];

export type { Product, Products, CartItem, Cart };
