import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Kaos Mario",
    price: 90000,
    stock: 100,
    description: "Kaos dengan tema Mario",
    image: "/images/kaos-mario.jpg",
  },
  {
    id: 2,
    name: "Kaos Pokemon",
    price: 110000,
    stock: 90,
    description: "Kaos dengan tema Pokemon",
    image: "/images/kaos-pokemon.jpg",
  },
  {
    id: 3,
    name: "Kaos Minecraft",
    price: 90000,
    stock: 40,
    description: "Kaos dengan tema Minecraft",
    image: "/images/kaos-minecraft.jpg",
  },
];

const ProductList = () => {
  const navigate = useNavigate();

  // Pastikan fungsi handleProductClick didefinisikan
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => handleProductClick(product)}
        >
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>Rp. {product.price.toLocaleString()}</p>
          <p>{product.stock} pcs</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
