import React from "react";
import "../styles/SidebarKategori.css";

const SidebarKategori = () => {
  const categories = [
    "Kaos Game",
    "Kaos Jersi",
    "Kaos Casual",
    "Kaos Fantasy",
    "Kaos Artistik",
  ];

  return (
    <div className="sidebar-categori">
      <h3>KATEGORI</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarKategori;
