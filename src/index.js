import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext"; // Pastikan impor CartProvider
import { AuthProvider } from "./context/AuthContext"; // Pastikan mengimpor AuthProvider

ReactDOM.render(
  <AuthProvider>
    {" "}
    {/* Bungkus dengan AuthProvider */}
    <CartProvider>
      {" "}
      {/* Bungkus dengan CartProvider */}
      <App />
    </CartProvider>
  </AuthProvider>,
  document.getElementById("root")
);
