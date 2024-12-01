import React from 'react';

const Sidebar = () => {
    return (
    <div style={{ width: '200px', background: '#f8f9fa', padding: '20px', height: '100vh' }}>
        <h3>Dashboard</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="/">Kategori</a></li>
        <li><a href="/">Produk</a></li>
        <li><a href="/">Akun</a></li>
        <li><a href="/">Semua Transaksi</a></li>
        <li><a href="/">Notifikasi</a></li>
        <li><a href="/">Settings</a></li>
        </ul>
    </div>
    );
};

export default Sidebar;
