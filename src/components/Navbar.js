import React from "react";
import "../styles/Navbar.css";
import { useCart } from "../context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext"; // Pastikan import hook useAuth

const Navbar = () => {
  const { cartItems } = useCart();
  const { isLoggedIn } = useAuth(); // Mengakses status login
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">T-SHIRT JS</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="active">
            Keranjang Belanja ({cartItems.length})
          </NavLink>
        </li>
        <li>
          <NavLink to="/confirmation" activeClassName="active">
            Konfirmasi Belanja
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" activeClassName="active">
            Cek Pesanan
          </NavLink>
        </li>
      </ul>
      <div className="profile-icon" onClick={handleProfileClick}>
        <FaUserCircle size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
