import React, { useEffect, useState } from "react";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrderHistory(storedHistory);
  }, []);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleBackToList = () => {
    setSelectedOrder(null);
  };

  return (
    <div>
      <h1>Riwayat Pesanan</h1>
      {selectedOrder ? (
        <div>
          <button onClick={handleBackToList}>Kembali ke Riwayat Pesanan</button>
          <h3>Detail Pesanan</h3>
          <p>Nomor Transaksi: {selectedOrder.transactionNumber}</p>
          <p>Tanggal: {selectedOrder.date}</p>
          <p>Waktu: {selectedOrder.time}</p>
          <p>Alamat Pengiriman: {selectedOrder.shippingAddress}</p>
          <p>Metode Pengiriman: {selectedOrder.shippingMethod}</p>
          <p>Metode Pembayaran: {selectedOrder.paymentMethod}</p>
          <p>
            Total Pembayaran: Rp {selectedOrder.totalPrice.toLocaleString()}
          </p>
          <p>Status: {selectedOrder.status}</p>
          <p>Produk:</p>
          <ul>
            {(selectedOrder.products || []).map((product, index) => (
              <li key={index}>
                <img
                  src={product.image || "default-image.jpg"}
                  alt={product.name || "Produk"}
                  style={{ width: "100px", height: "100px" }}
                />
                <p>
                  {product.name || "Nama tidak tersedia"} - Warna:{" "}
                  {product.color || "-"}, Ukuran: {product.size || "-"} -{" "}
                  {product.quantity || 0} x Rp{" "}
                  {product.price?.toLocaleString() || "0"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : orderHistory.length === 0 ? (
        <p>Belum ada pesanan.</p>
      ) : (
        <ul>
          {orderHistory.map((order, index) => (
            <li key={index} onClick={() => handleOrderClick(order)}>
              <h3>Nomor Transaksi: {order.transactionNumber}</h3>
              <p>Total Pembayaran: Rp {order.totalPrice.toLocaleString()}</p>
              <p>Status: {order.status}</p>
              <p>Jumlah Produk: {order.products?.length || 0}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
