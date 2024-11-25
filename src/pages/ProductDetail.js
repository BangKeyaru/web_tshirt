import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { state: product } = useLocation(); // Dapatkan data produk dari navigasi
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Inisialisasi useNavigate

  // State untuk warna, ukuran, dan jumlah yang dipilih
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Fungsi untuk menambahkan produk ke keranjang
  const handleAddToCart = () => {
    // Validasi sebelum menambahkan ke keranjang
    if (!selectedColor || !selectedSize || quantity < 1) {
      alert("Harap pilih warna, ukuran, dan jumlah produk terlebih dahulu.");
      return;
    }

    addToCart({
      ...product,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
    alert("Produk berhasil ditambahkan ke keranjang!");
  };

  // Fungsi untuk langsung membeli produk
  const handleBuyNow = () => {
    if (!selectedColor || !selectedSize || quantity < 1) {
      alert("Harap pilih warna, ukuran, dan jumlah produk terlebih dahulu.");
      return;
    }

    const purchasedProduct = {
      ...product,
      color: selectedColor,
      size: selectedSize,
      quantity,
    };

    localStorage.setItem("purchasedProduct", JSON.stringify(purchasedProduct));
    alert("Produk berhasil dibeli.");
    navigate("/confirmation");
  };

  // Fungsi untuk memilih warna
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  // Fungsi untuk memilih ukuran
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Fungsi untuk mengubah jumlah pembelian
  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, event.target.value); // Menghindari jumlah kurang dari 1
    setQuantity(newQuantity);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="category">Kategori: {product.category}</p>
        <p className="price">Rp. {product.price.toLocaleString()}</p>
        <p className="stock">Stock: {product.stock}</p>
        <p className="description">Deskripsi: {product.description}</p>

        <div className="options">
          {/* Pilihan Warna */}
          <div className="colors">
            <label>Pilihan Warna:</label>
            <div className="color-options">
              <span
                className={`color red ${
                  selectedColor === "red" ? "selected" : ""
                }`}
                onClick={() => handleColorSelect("red")}
              ></span>
              <span
                className={`color black ${
                  selectedColor === "black" ? "selected" : ""
                }`}
                onClick={() => handleColorSelect("black")}
              ></span>
              <span
                className={`color blue ${
                  selectedColor === "blue" ? "selected" : ""
                }`}
                onClick={() => handleColorSelect("blue")}
              ></span>
              <span
                className={`color white ${
                  selectedColor === "white" ? "selected" : ""
                }`}
                onClick={() => handleColorSelect("white")}
              ></span>
            </div>
          </div>

          {/* Pilihan Ukuran */}
          <div className="sizes">
            <label>Pilihan Ukuran:</label>
            <div className="size-options">
              <button
                className={`size-button ${
                  selectedSize === "M" ? "selected" : ""
                }`}
                onClick={() => handleSizeSelect("M")}
              >
                M
              </button>
              <button
                className={`size-button ${
                  selectedSize === "L" ? "selected" : ""
                }`}
                onClick={() => handleSizeSelect("L")}
              >
                L
              </button>
              <button
                className={`size-button ${
                  selectedSize === "XL" ? "selected" : ""
                }`}
                onClick={() => handleSizeSelect("XL")}
              >
                XL
              </button>
              <button
                className={`size-button ${
                  selectedSize === "XXL" ? "selected" : ""
                }`}
                onClick={() => handleSizeSelect("XXL")}
              >
                XXL
              </button>
            </div>
          </div>

          {/* Pilihan Jumlah */}
          <div className="quantity">
            <label>Jumlah Pembelian:</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
        </div>

        <div className="actions">
          {/* Ganti tombol dengan ikon keranjang */}
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            <i className="fas fa-shopping-cart"></i> Tambah ke Keranjang
          </button>
          <button onClick={handleBuyNow}>Beli Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
