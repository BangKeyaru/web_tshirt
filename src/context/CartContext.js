import React, { createContext, useState, useContext } from "react";

// Context untuk Cart
const CartContext = createContext();

// Provider untuk CartContext
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Fungsi untuk menambahkan produk ke keranjang
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Fungsi untuk menghapus produk dari keranjang
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook untuk mengakses CartContext
export const useCart = () => useContext(CartContext);
