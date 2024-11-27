import React, { createContext, useContext, useState } from "react";

// Membuat context untuk keranjang belanja
const CartContext = createContext();

// Provider untuk keranjang belanja
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const newItem = {
      ...product,
      image: product.images[0], // Menyimpan gambar pertama sebagai gambar produk
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook untuk mengakses CartContext
export const useCart = () => useContext(CartContext);
