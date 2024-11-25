import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Mengakses context untuk login
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import { NavLink } from "react-router-dom"; // Import NavLink
import "../styles/Login.css"; // Pastikan file CSS login diimpor

const Login = () => {
  const { login } = useAuth(); // Mengakses fungsi login dari context
  const navigate = useNavigate(); // Untuk navigasi ke halaman lain setelah login

  // State untuk menangani input form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State untuk error message

  // Fungsi untuk menangani submit form
  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah reload halaman saat submit form

    // Validasi form
    if (!email || !password) {
      setError("Email dan Password harus diisi.");
      return;
    }

    // Panggil fungsi login dan arahkan ke profil jika berhasil login
    login();
    navigate("/profile"); // Arahkan ke halaman profil setelah login
  };

  return (
    <div className="login-container fade-in">
      {" "}
      {/* Tambahkan kelas fade-in */}
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        {/* Email input */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email Anda"
            required
          />
        </div>

        {/* Password input */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan password Anda"
            required
          />
        </div>

        {/* Error message */}
        {error && <p className="error">{error}</p>}

        {/* Login button */}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {/* Link untuk registrasi */}
      <div className="register-link">
        <p>
          Belum punya akun? <NavLink to="/register">Daftar di sini</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
