import React from "react";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Keranjang Belanja</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang Anda kosong.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Warna: {item.color}</p>
                <p>Ukuran: {item.size}</p>
                <p>Jumlah: {item.quantity}</p>
                <p>Harga: Rp. {item.price.toLocaleString()}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Hapus</button>
            </div>
          ))}
          <Footer /> {/* Gunakan Footer di sini */}
        </div>
      )}
    </div>
  );
};

export default Cart;
