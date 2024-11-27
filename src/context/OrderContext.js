import React, { createContext, useContext, useState } from "react";

// Context untuk mengelola pesanan
const OrderContext = createContext();

// Provider untuk membungkus aplikasi
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]); // Daftar pesanan

  // Fungsi untuk menambahkan pesanan baru
  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

// Hook untuk menggunakan context
export const useOrder = () => useContext(OrderContext);
