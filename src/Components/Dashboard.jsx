// src/components/Dashboard.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const location = useLocation();
    const { username } = location.state || { username: 'User' };

    return (
        <div className="dashboard">
            <h1 className="dashboard-header">Welcome to Cryptify, {username}!</h1>
        </div>
    );
};

export default Dashboard;
