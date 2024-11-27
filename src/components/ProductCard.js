import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Tambahkan ini
import { useCart } from "../context/CartContext"; // Import context keranjang
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // Inisialisasi navigasi
  const { addToCart } = useCart(); // Mengambil fungsi addToCart dari context keranjang

  // Ambil gambar berdasarkan state hover
  const currentImage = hovered ? product.images[1] : product.images[0];

  // Fungsi untuk navigasi ke halaman detail produk
  const handleProductClick = () => {
    navigate(`/product/${product.id}`, { state: product }); // Navigasi dengan data produk
  };

  // Fungsi untuk menambah produk ke keranjang
  const handleAddToCart = () => {
    addToCart(product); // Menambahkan produk ke keranjang
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      {/* Tambahkan event klik */}
      <div
        className="product-image-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={currentImage} alt={product.name} className="product-image" />
        {product.isOnSale && <span className="sale-badge">SALE</span>}
      </div>
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        {product.discount > 0 && (
          <div className="product-price">
            <p className="original-price">Rp. {product.originalPrice}</p>
            <span className="discount">-{product.discount}%</span>
          </div>
        )}
        <p className="final-price">Rp. {product.price.toLocaleString()}</p>
        <div className="product-actions">
          <span className="wishlist">❤️ Wishlist</span>
          <span
            className="add-cart"
            onClick={(e) => {
              e.stopPropagation(); // Mencegah klik menavigasi ke halaman detail
              handleAddToCart(); // Menambah produk ke keranjang
            }}
          >
            🛒 +Keranjang
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
