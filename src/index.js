import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext"; // Pastikan impor CartProvider
import { AuthProvider } from "./context/AuthContext"; // Pastikan mengimpor AuthProvider
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
