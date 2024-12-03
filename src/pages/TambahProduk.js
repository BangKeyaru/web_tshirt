import React from 'react';
import '../styles/TambahProduk.css';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';
import BackButton from '../components/BackButton';

const TambahProduk = () => {
    return (
    <div className="app">
        <ProductForm />
        <ProductTable />
        <BackButton />
    </div>
    );
};

export default TambahProduk;
