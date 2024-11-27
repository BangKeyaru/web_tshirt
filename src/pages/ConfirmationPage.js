import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ConfirmationPage.css";

const ConfirmationPage = () => {
  const [purchasedProduct, setPurchasedProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [buyerNote, setBuyerNote] = useState("");

  useEffect(() => {
    const storedProduct = localStorage.getItem("purchasedProduct");
    if (storedProduct) {
      try {
        const parsedProduct = JSON.parse(storedProduct);
        if (parsedProduct && typeof parsedProduct === "object") {
          setPurchasedProduct(parsedProduct);
        } else {
          console.error("Invalid product data:", parsedProduct);
        }
      } catch (error) {
        console.error("Error parsing stored product:", error);
      }
    }
  }, []);

  const resetForm = () => {
    setPurchasedProduct(null);
    setPaymentMethod("");
    setSelectedBank("");
    setShippingMethod("");
    setShippingAddress("");
    setBuyerNote("");
    localStorage.removeItem("purchasedProduct"); // Hapus produk dari localStorage
  };

  const generateTransactionNumber = () => {
    return `TRX-${new Date().getTime()}`;
  };

  const generateReceipt = () => {
    if (!purchasedProduct) {
      alert("Produk tidak ditemukan. Harap lakukan pembelian terlebih dahulu.");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Shopee", 20, 20); // Judul utama
    doc.setFontSize(12);

    // Informasi Pembeli dan Penjual
    doc.text(`Alamat Pembeli: ${shippingAddress}`, 20, 40, { maxWidth: 180 });
    doc.text(`No. Handphone Pembeli: 0812345678`, 20, 50);
    doc.text(`Nama Penjual: Toko Karis Jaya`, 140, 35);

    // Informasi Transaksi
    doc.text(`Nomor Pesanan: ${generateTransactionNumber()}`, 20, 65);
    doc.text(`Tanggal: ${new Date().toLocaleDateString()}`, 20, 70);
    doc.text(`Metode Pembayaran: ${paymentMethod}`, 20, 75);
    doc.text(`Metode Pengiriman: ${shippingMethod}`, 20, 80);
    doc.line(20, 85, 190, 85); // Garis pembatas

    // Header Tabel Produk
    doc.text("No.", 20, 90);
    doc.text("Produk", 40, 90);
    doc.text("Variasi", 110, 90);
    doc.text("Harga Produk", 140, 90);
    doc.text("Kuantitas", 170, 90);
    doc.text("Subtotal", 190, 90);

    // Daftar Produk
    let yPosition = 100;
    const productSubtotal = purchasedProduct.price * purchasedProduct.quantity;

    doc.text("1", 20, yPosition);
    doc.text(purchasedProduct.name, 40, yPosition, { maxWidth: 60 });
    doc.text("-", 110, yPosition); // Variasi kosong
    doc.text(`Rp${purchasedProduct.price.toLocaleString()}`, 140, yPosition, {
      align: "right",
    });
    doc.text(`${purchasedProduct.quantity}`, 170, yPosition);
    doc.text(`Rp${productSubtotal.toLocaleString()}`, 190, yPosition, {
      align: "right",
    });

    yPosition += 10; // Pindah ke baris berikutnya

    // Total dan Rincian Biaya
    const shippingFee = 27000;
    const total = productSubtotal + shippingFee;

    doc.text("Subtotal untuk Produk:", 20, yPosition + 10);
    doc.text(`Rp${productSubtotal.toLocaleString()}`, 190, yPosition + 10, {
      align: "right",
    });

    doc.text("Subtotal Pengiriman:", 20, yPosition + 15);
    doc.text(`Rp${shippingFee.toLocaleString()}`, 190, yPosition + 15, {
      align: "right",
    });

    doc.text("Total Pembayaran:", 20, yPosition + 25);
    doc.setFontSize(14);
    doc.text(`Rp${total.toLocaleString()}`, 190, yPosition + 25, {
      align: "right",
    });

    // Simpan PDF
    doc.save("Nota_Pembelian_Shopee.pdf");
  };

  const handlePaymentSubmit = () => {
    if (!shippingAddress.trim()) {
      alert("Harap isi alamat pengiriman!");
      return;
    }
    if (!paymentMethod) {
      alert("Harap pilih metode pembayaran!");
      return;
    }
    if (paymentMethod === "Transfer" && !selectedBank) {
      alert("Harap pilih bank!");
      return;
    }
    if (!shippingMethod) {
      alert("Harap pilih metode pengiriman!");
      return;
    }

    generateReceipt(); // Unduh struk pembayaran
    alert("Pembayaran berhasil!");
    resetForm(); // Reset data form dan tampilan setelah pembayaran
  };

  return (
    <div className="container confirmation-page mt-4">
      {!purchasedProduct ? (
        <div className="text-center">
          <h2>Belum Ada Transaksi</h2>
          <p>Silakan beli produk terlebih dahulu.</p>
        </div>
      ) : (
        <div>
          <h2 className="mb-4">Pembayaran</h2>
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Nomor Transaksi</label>
              <div className="form-control">{generateTransactionNumber()}</div>
            </div>
            <div className="col-12">
              <label className="form-label">Nama Produk</label>
              <div className="form-control">{purchasedProduct.name}</div>
            </div>
            <div className="col-12">
              <label className="form-label">Alamat Pengiriman</label>
              <input
                type="text"
                className="form-control"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Metode Pengiriman</label>
              <select
                className="form-select"
                value={shippingMethod}
                onChange={(e) => setShippingMethod(e.target.value)}
              >
                <option value="">Pilih metode pengiriman</option>
                <option value="SiCepat">SiCepat</option>
                <option value="Reguler">Reguler</option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label">Metode Pembayaran</label>
              <select
                className="form-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Pilih metode pembayaran</option>
                <option value="COD">COD</option>
                <option value="Transfer">Transfer Bank</option>
              </select>
            </div>
            {paymentMethod === "Transfer" && (
              <div className="col-12">
                <label className="form-label">Pilih Bank</label>
                <select
                  className="form-select"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                >
                  <option value="">Pilih bank</option>
                  <option value="Bank A">Bank A</option>
                  <option value="Bank B">Bank B</option>
                </select>
              </div>
            )}
            <div className="col-12">
              <label className="form-label">Catatan untuk Penjual</label>
              <textarea
                className="form-control"
                value={buyerNote}
                onChange={(e) => setBuyerNote(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button
            className="btn btn-primary mt-4 w-100"
            onClick={handlePaymentSubmit}
          >
            Bayar
          </button>
        </div>
      )}
    </div>
  );
};

export default ConfirmationPage;
