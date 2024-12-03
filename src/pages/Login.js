import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Mengakses context untuk autentikasi
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import { NavLink } from "react-router-dom"; // Untuk link navigasi
import "../styles/Login.css"; // Pastikan file CSS diimpor
import Navbar from "../components/Navbar"; // Navbar diimpor
import Footer from "../components/Footer"; // Footer diimpor

const Login = () => {
  const { login } = useAuth(); // Mengakses fungsi login dari context
  const navigate = useNavigate(); // Untuk navigasi ke halaman lain setelah login

  // State untuk input form dan error handling
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null); // State untuk error message
  const [isLoading, setIsLoading] = useState(false); // State untuk menampilkan loader

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk validasi input
  const validateInput = () => {
    const { email, password } = formData;
    if (!email.trim() || !password.trim()) {
      setError("Email dan password harus diisi.");
      return false;
    }
    return true;
  };

  // Fungsi untuk menangani form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Validasi input
    if (!validateInput()) return;

    setError(null); // Reset error state
    setIsLoading(true); // Tampilkan loader

    // Simulasi autentikasi (ganti dengan logika autentikasi backend)
    setTimeout(() => {
      if (formData.email === "admin@gmail.com" && formData.password === "admin123") {
        login({ email: formData.email, isAdmin: true }); // Login sebagai admin
        localStorage.setItem("authToken", "adminToken");
        localStorage.setItem("userRole", "admin");
        navigate("/admin/dashboard"); // Arahkan ke halaman admin
      } else if (formData.email === "user@gmail.com" && formData.password === "user123") {
        login({ email: formData.email, isAdmin: false }); // Login sebagai user biasa
        localStorage.setItem("authToken", "userToken");
        localStorage.setItem("userRole", "user");
        navigate("/"); // Arahkan ke halaman profil
      } else {
        setError("Email atau password salah."); // Tampilkan pesan error jika login gagal
      }
      setIsLoading(false); // Sembunyikan loader
    }, 1000); // Simulasi proses login selama 1 detik
  };

  return (
    <>
      <Navbar /> {/* Navbar aktif */}
      <div className="login-container fade-in">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Masukkan email Anda"
              required
              className={error ? "input-error" : ""}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Masukkan password Anda"
              required
              className={error ? "input-error" : ""}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? <span className="loader"></span> : "Login"}
          </button>
        </form>
        <div className="register-link">
          <p>
            Belum punya akun? <NavLink to="/register">Daftar di sini</NavLink>
          </p>
        </div>
        
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div> {/* Spacer untuk memberikan jarak */}
      <Footer /> {/* Footer tetap di bawah */}
    </>
  );
};

export default Login;
