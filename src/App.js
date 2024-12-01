import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ConfirmationPage from "./pages/ConfirmationPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import OrderHistory from "./pages/OrderHistory";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./context/ProtectedRoute"; // Pastikan path ini sesuai dengan struktur project Anda
import { useAuth } from "./context/AuthContext"; // Tambahkan impor ini

const App = () => {
  const { isLoggedIn, user } = useAuth(); // Gunakan `useAuth` untuk mendapatkan status login dan pengguna

  const isAdmin = user?.isAdmin; // Tentukan apakah pengguna adalah admin

  return (
    <div className="page-container">
      <CartProvider>
        <OrderProvider>
          <Router>
            <Navbar />
            <div className="content-wrap">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected User Routes */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/order-history"
                  element={
                    <ProtectedRoute>
                      <OrderHistory />
                    </ProtectedRoute>
                  }
                />

                {/* Protected Admin Routes */}
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute isAdminRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
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
