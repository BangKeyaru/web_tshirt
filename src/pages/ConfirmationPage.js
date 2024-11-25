import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "../styles/ConfirmationPage.css";

const ConfirmationPage = () => {
  const [purchasedProduct, setPurchasedProduct] = useState(null);

  useEffect(() => {
    const storedProduct = localStorage.getItem("purchasedProduct");
    if (storedProduct) {
      setPurchasedProduct(JSON.parse(storedProduct));
    }
  }, []);

  return (
    <div className="confirmation-page">
      {!purchasedProduct ? (
        <div className="empty-confirmation">
          <h2>Belum Ada Transaksi</h2>
          <p>Silakan beli produk terlebih dahulu.</p>
        </div>
      ) : (
        <main className="main">
          <h2 className="section-title">Pembayaran</h2>
          <div className="form">
            <div className="row">
              <label>Nomor Transaksi:</label>
              <span>102</span>
            </div>
            <div className="row">
              <label>Nama Produk:</label>
              <span>{purchasedProduct.name}</span>
            </div>
            <div className="row">
              <label>Warna:</label>
              <span>{purchasedProduct.color}</span>
            </div>
            <div className="row">
              <label>Ukuran:</label>
              <span>{purchasedProduct.size}</span>
            </div>
            <div className="row">
              <label>Jumlah:</label>
              <span>{purchasedProduct.quantity}</span>
            </div>
            <div className="row">
              <label>Total Harga:</label>
              <span>
                Rp {purchasedProduct.price * purchasedProduct.quantity}
              </span>
            </div>
            <div className="row">
              <label>Alamat Pengiriman:</label>
              <input
                type="text"
                placeholder="Masukkan alamat"
                className="input"
              />
            </div>
            <div className="row">
              <label>Kode Diskon:</label>
              <input
                type="text"
                placeholder="Masukkan kode"
                className="input"
              />
            </div>
            <div className="row">
              <label>Metode Pengiriman:</label>
              <input type="text" placeholder="Pilih metode" className="input" />
            </div>
            <div className="row">
              <label>Metode Pembayaran:</label>
              <input type="text" placeholder="Pilih metode" className="input" />
            </div>
            <div className="summary">
              <p>
                Total Belanja: Rp{" "}
                {purchasedProduct.price * purchasedProduct.quantity}
              </p>
              <p>Ongkos Pengiriman: Rp 27.000</p>
              <p>
                Sub Total Pesanan: Rp{" "}
                {purchasedProduct.price * purchasedProduct.quantity + 27000}
              </p>
            </div>
            <button className="buy-button">Bayar</button>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default ConfirmationPage;
