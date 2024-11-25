import React, { useState, useEffect } from "react";
import "../styles/profile.css";

const Profile = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    handphone: "",
    provinsi: "",
    kecamatan: "",
    kota: "",
    alamat: "",
    kodePos: "",
    tambahan: "",
  });

  // Load data dari localStorage saat pertama kali aplikasi dijalankan
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("profileData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fungsi untuk menyimpan data ke localStorage
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    localStorage.setItem("profileData", JSON.stringify(formData));
    alert("Data berhasil disimpan!");
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <div className="sidebar-profil">
        <div className="profile-picture"></div>
        <button className="sidebar-button">PROFILE</button>
        <button className="sidebar-button">NOTIFIKASI PESAN</button>
        <button className="sidebar-button">RIWAYAT TRANSAKSI</button>
        <button className="sidebar-button">LOG OUT</button>
        <button className="back-button">⬅</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Account Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Handphone</label>
            <input
              type="text"
              name="handphone"
              value={formData.handphone}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Provinsi</label>
              <input
                type="text"
                name="provinsi"
                value={formData.provinsi}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Kecamatan</label>
              <input
                type="text"
                name="kecamatan"
                value={formData.kecamatan}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Kota</label>
            <input
              type="text"
              name="kota"
              value={formData.kota}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Alamat</label>
            <textarea
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Kode Pos</label>
            <input
              type="text"
              name="kodePos"
              value={formData.kodePos}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Informasi Tambahan</label>
            <textarea
              name="tambahan"
              value={formData.tambahan}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="save-button">
            SIMPAN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
