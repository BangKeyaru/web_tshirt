import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext"; // Import OrderProvider
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ConfirmationPage from "./pages/ConfirmationPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import OrderHistory from "./pages/OrderHistory"; // Halaman cek pesanan
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div className="page-container">
      <CartProvider>
        <OrderProvider>
          {" "}
          {/* Bungkus aplikasi dengan OrderProvider */}
          <Router>
            <Navbar />
            <div className="content-wrap">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<ProductList />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </OrderProvider>
      </CartProvider>
    </div>
  );
};

export default App;
