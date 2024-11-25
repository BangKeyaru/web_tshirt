import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>Rp. {product.price}</p>
      <p>{product.stock} pcs</p>
    </div>
  );
};

export default ProductCard;
