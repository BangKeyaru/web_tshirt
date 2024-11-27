import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetail.css"; // Mengimpor file CSS terpisah
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetail = () => {
  const { state: product } = useLocation(); // Ambil data produk dari navigasi
  const { addToCart } = useCart(); // Fungsi untuk menambahkan ke keranjang
  const navigate = useNavigate(); // Inisialisasi navigasi

  // State untuk gambar utama yang dipilih
  const [mainImage, setMainImage] = useState(product.images[0]);

  // State untuk pilihan
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Early return jika produk tidak ditemukan
  if (!product) {
    return <div className="text-center">Produk tidak ditemukan!</div>;
  }

  // Fungsi untuk menambahkan ke keranjang
  const handleAddToCart = () => {
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

  // Fungsi untuk membeli langsung
  const handleBuyNow = () => {
    if (!selectedColor || !selectedSize || quantity < 1) {
      alert("Harap pilih warna, ukuran, dan jumlah produk terlebih dahulu.");
      return;
    }

    const productToBuy = {
      ...product,
      color: selectedColor,
      size: selectedSize,
      quantity,
    };

    localStorage.setItem("purchasedProduct", JSON.stringify(productToBuy));
    alert("Produk berhasil dibeli.");
    navigate("/Confirmation");
  };

  // Fungsi untuk memilih warna
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  // Fungsi untuk memilih ukuran
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Fungsi untuk mengubah jumlah
  const handleQuantityChange = (event) => {
    let newQuantity = Math.max(1, parseInt(event.target.value, 10));
    setQuantity(newQuantity);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Gambar Produk Utama */}
        <div className="col-md-6">
          <img
            src={mainImage}
            alt={product.name}
            className="img-fluid rounded product-image-main" // Menggunakan kelas CSS
          />
        </div>

        {/* Informasi Produk */}
        <div className="col-md-6 product-details">
          <h1 className="mb-3">{product.name}</h1>
          <p className="text-muted">{product.description}</p>
          <h3 className="product-price">Rp. {product.price}</h3>
          {product.discount > 0 && (
            <p className="discount-info">
              Diskon: {product.discount}% (Harga Asli: Rp.{" "}
              {product.originalPrice})
            </p>
          )}

          {/* Pilihan Warna */}
          <div className="mt-4">
            <h5>Pilih Warna:</h5>
            <div className="d-flex gap-2">
              {["Merah", "Biru", "Hijau"].map((color) => (
                <button
                  key={color}
                  className={`btn ${
                    selectedColor === color
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => handleColorSelect(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Pilihan Ukuran */}
          <div className="mt-4">
            <h5>Pilih Ukuran:</h5>
            <div className="d-flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`btn ${
                    selectedSize === size
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Pilihan Jumlah */}
          <div className="mt-4">
            <h5>Jumlah:</h5>
            <input
              type="number"
              className="form-control w-25"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>

          {/* Tombol Aksi */}
          <div className="mt-4 d-flex gap-3">
            <button className="btn btn-success" onClick={handleAddToCart}>
              Tambah ke Keranjang
            </button>
            <button className="btn btn-warning" onClick={handleBuyNow}>
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail Gambar */}
      <div className="thumbnail-container">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="img-thumbnail thumbnail-image" // Menggunakan kelas CSS
            onClick={() => setMainImage(image)} // Mengubah gambar utama saat thumbnail diklik
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
