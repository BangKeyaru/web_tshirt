import React from "react";
import "../styles/Navbar.css";
import { useCart } from "../context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand fw-bold">
          T-SHIRT JS
        </NavLink>

        {/* Toggler untuk layar kecil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Daftar menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                Keranjang Belanja ({cartItems.length})
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/confirmation" className="nav-link">
                Konfirmasi Belanja
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/order-history" className="nav-link">
                Cek Pesanan
              </NavLink>
            </li>
          </ul>
          {/* Ikon Profil */}
          <div
            className="ms-3 d-flex align-items-center"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
            title={isLoggedIn ? "Lihat Profil" : "Login untuk melihat profil"}
          >
            <FaUserCircle size={30} color="white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
