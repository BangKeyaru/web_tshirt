import React from 'react';
import '../styles/ProductTable.css';

const ProductTable = () => {
    const dummyData = [
    {
        id: 1,
        name: 'Kaos Mario',
        price: 90000,
        category: 'Kaos Game',
        image: 'https://via.placeholder.com/100',
    },
    ];

    return (
    <div className="product-table">
        <table>
        <thead>
            <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Kategori</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {dummyData.map((product, index) => (
            <tr key={product.id}>
                <td>{index + 1}</td>
                <td>
                <img src={product.image} alt={product.name} className="product-image" />
                {product.name}
                </td>
                <td>Rp.{product.price.toLocaleString('id-ID')}</td>
                <td>{product.category}</td>
                <td>
                <button className="action-button stok">STOK</button>
                <button className="action-button edit">EDIT</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
};

export default ProductTable;
