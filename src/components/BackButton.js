import React from 'react';
import { useNavigate } from 'react-router-dom';  // Menggunakan React Router untuk navigasi
import "../styles/BackButton.css"

const BackButton = ({ label = "Kembali" }) => {
  const navigate = useNavigate();  // Navigasi menggunakan React Router

    const handleBack = () => {
    navigate(-1);  // Kembali ke halaman sebelumnya
    };

    return (
    <button onClick={handleBack} className="back-button">
        {label}
    </button>
    );
};

export default BackButton;
