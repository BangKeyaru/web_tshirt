import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Menghitung total harga keranjang
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Keranjang Belanja</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Keranjang Anda kosong.</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="row no-gutters">
                  {/* Kolom untuk gambar produk */}
                  <div className="col-4">
                    <img
                      src={item.image} // Mengambil gambar produk
                      alt={item.name}
                      className="card-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  {/* Kolom untuk informasi produk */}
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        <strong>Warna:</strong> {item.color}
                      </p>
                      <p className="card-text">
                        <strong>Ukuran:</strong> {item.size}
                      </p>
                      <p className="card-text">
                        <strong>Jumlah:</strong> {item.quantity}
                      </p>
                      <p className="card-text">
                        <strong>Harga:</strong> Rp.{" "}
                        {item.price.toLocaleString()} {/* Menampilkan harga */}
                      </p>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(item.id)} // Fungsi untuk menghapus produk
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Menampilkan Total harga */}
      <div className="mt-4 d-flex justify-content-between">
        <h4>Total</h4>
        <h4>Rp. {calculateTotal().toLocaleString()}</h4>
      </div>

      {/* Tombol untuk Checkout */}
      <div className="d-flex justify-content-end mt-4">
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
