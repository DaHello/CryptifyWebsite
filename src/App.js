// link all css into app file and you do not need to import them inside of each jsx file

// need to cd to src folder 

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';

// routes each part of the website by URL address
export default function Webpage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}
