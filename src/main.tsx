import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { CartProvider } from "./CartContext/CartProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl border min-h-screen mx-auto p-4">
          <Navbar />
          <div className="text-center">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/pages/shop" element={<Shop />} />
              <Route path="/pages/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
