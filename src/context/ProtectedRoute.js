import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Pastikan Anda memiliki AuthContext untuk autentikasi

const ProtectedRoute = ({ children, isAdminRoute = false }) => {
  const { isLoggedIn, user } = useAuth(); // Gunakan konteks untuk memeriksa status login dan peran pengguna

  // Jika belum login, arahkan ke halaman login
    if (!isLoggedIn) {
    return <Navigate to="/login" />;
    }

  // Jika rute membutuhkan admin dan pengguna bukan admin, arahkan ke halaman utama
    if (isAdminRoute && !user?.isAdmin) {
    return <Navigate to="/" />;
    }

  // Jika semua kondisi terpenuhi, render komponen anak
    return children;
};

export default ProtectedRoute;
