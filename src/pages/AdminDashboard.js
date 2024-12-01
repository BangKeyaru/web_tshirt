import React from 'react';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderDashboard';
import Card from '../components/Cards';
import '../styles/AdminDashboard.css';  // Impor file CSS untuk Dashboard

const Dashboard = () => {
    return (
    <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
        <Header />
        <div className="card-container">
            <Card title="Transaksi Finish / Total Transaksi" />
            <Card title="Revenue / Target" />
            <Card title="Produk Terjual / Target" />
            <Card title="Produk Perlu di-Restock" />
        </div>
        </div>
    </div>
    );
};

export default Dashboard;
