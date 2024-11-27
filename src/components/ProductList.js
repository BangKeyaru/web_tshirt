import React, { useState } from "react";
import ProductCard from "./ProductCard"; // Pastikan path ini benar
import "../styles/ProductList.css"; // Pastikan path ini benar
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Kaos Mario",
    price: 90000,
    originalPrice: 120000,
    discount: 25,
    stock: 100,
    description: "Kaos dengan tema Mario",
    images: [
      "/images/kaos-mario.jpg",
      "/images/kaos-mario-detail1.jpg",
      "/images/kaos-mario-detail2.jpg",
    ],
    isOnSale: true,
  },
  {
    id: 2,
    name: "Kaos Pokemon",
    price: 110000,
    originalPrice: 140000,
    discount: 21,
    stock: 90,
    description: "Kaos dengan tema Pokemon",
    images: [
      "/images/kaos-pokemon.jpg",
      "/images/kaos-pokemon-detail1.jpg",
      "/images/kaos-pokemon-detail2.jpg",
    ],
    isOnSale: true,
  },
  {
    id: 3,
    name: "Kaos Minecraft",
    price: 90000,
    originalPrice: 100000,
    discount: 10,
    stock: 40,
    description: "Kaos dengan tema Minecraft",
    images: [
      "/images/kaos-minecraft.jpg",
      "/images/kaos-minecraft-detail1.jpg",
      "/images/kaos-minecraft-detail2.jpg",
    ],
    isOnSale: true,
  },
];

const ProductList = () => {
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState(null); // Contoh penggunaan useState di awal komponen

  // Pastikan semua hook dipanggil di sini, sebelum logika lain atau pengembalian
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product)}
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <ProductCard
            product={product}
            isHovered={hoveredProduct === product.id} // Menggunakan state untuk hover
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
