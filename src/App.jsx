import React, { useState, useCallback, useMemo, useEffect } from "react";
import ProductListPage from "./ProductListPage";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import CartPage from "./CartPage";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import Signup from "./Signup";
import NavBar from "./NavBar";
import EmptyCart from "./emptyCart";

export default function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [cart, setCart] = useState(savedData);

  // to handle add to cart feature 
  const handleAddToCart = useCallback((productId, count) => {
    let oldCount = cart[productId] || 0;
    let newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
  }, [cart]);

  // to remove produt form the cart
  const handleRemoveFromCart = useCallback((productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  }, []);

  
  const handleQuantity = useCallback((productId, newCount) => {
    if (newCount < 1) return;
    const newCart = { ...cart, [productId]: newCount };
    setCart(newCart);
  }, [cart]);

  
  useEffect(() => {
    localStorage.setItem("my-cart", JSON.stringify(cart));
  }, [cart]);

  const totalCount = useMemo(
    () => Object.values(cart).reduce((previous, current) => previous + current, 0),
    [cart]
  );

  return (
    <>
      <NavBar productCount={totalCount} photo="https://logos-world.net/wp-content/uploads/2020/11/eBay-Emblem.png" />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={
          <CartPage cart={cart} onRemove={handleRemoveFromCart} onUpdate={handleQuantity} />
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cartempty" element= {<EmptyCart/>}/>
      </Routes>
    </>
  );
}
