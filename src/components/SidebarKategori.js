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
    <div className="sidebar-categori p-3 bg-primary text-white rounded">
      <h3 className="mb-3">KATEGORI</h3>
      <ul className="list-group list-group-flush">
        {categories.map((category, index) => (
          <li
            key={index}
            className="list-group-item list-group-item-action bg-light text-dark my-1 rounded"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarKategori;
