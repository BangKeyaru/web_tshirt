import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Mengakses context untuk register
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import "../styles/Register.css"; // Pastikan file CSS register diimpor

const Register = () => {
  const { login } = useAuth(); // Mengakses fungsi login setelah registrasi
  const navigate = useNavigate(); // Untuk navigasi ke halaman lain setelah registrasi

  // State untuk menangani input form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // State untuk error message
  const [success, setSuccess] = useState(false); // State untuk success message

  // Fungsi untuk menangani submit form
  const handleRegister = (e) => {
    e.preventDefault(); // Mencegah reload halaman saat submit form

    // Validasi form
    if (!name || !email || !password || !confirmPassword) {
      setError("Semua field harus diisi.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok.");
      return;
    }

    // Simulasi proses registrasi berhasil
    setError(""); // Reset error jika berhasil
    setSuccess(true); // Menampilkan pesan sukses

    // Setelah sukses registrasi, login otomatis dan arahkan ke halaman profil
    login();
    navigate("/profile"); // Arahkan ke halaman profil setelah registrasi
  };

  return (
    <div className="register-container">
      <h2>Daftar Akun</h2>
      {success && (
        <p className="success">
          Registrasi berhasil! Anda sekarang dapat login.
        </p>
      )}
      <form onSubmit={handleRegister} className="register-form">
        {/* Name input */}
        <div className="input-group">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama lengkap Anda"
            required
          />
        </div>

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

        {/* Confirm Password input */}
        <div className="input-group">
          <label htmlFor="confirmPassword">Konfirmasi Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Konfirmasi password Anda"
            required
          />
        </div>

        {/* Error message */}
        {error && <p className="error">{error}</p>}

        {/* Register button */}
        <button type="submit" className="register-button">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default Register;
