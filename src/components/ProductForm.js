import React from 'react';
import '../styles/ProductForm.css';

const ProductForm = () => {
    return (
    <div className="product-form">
        <h3>Tambah Produk</h3>
        <form>
        <label>Kode Produk</label>
        <input type="text" placeholder="Kode Produk" className="form-input" />
        
        <label>Nama</label>
        <input type="text" placeholder="Nama Produk" className="form-input" />
        
        <label>Gambar</label>
        <input type="file" className="form-input" />
        
        <label>Deskripsi</label>
        <textarea placeholder="Deskripsi Produk" className="form-input"></textarea>
        
        <label>Harga Produk</label>
        <input type="number" placeholder="Rp." className="form-input" />
        
        <label>Kategori</label>
        <input type="text" placeholder="Kategori" className="form-input" />
        
        <button type="submit" className="form-button">Tambah Produk</button>
        </form>
    </div>
    );
};

export default ProductForm;
