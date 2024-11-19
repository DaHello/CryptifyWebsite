// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';
import { MainPage } from './components/mainpage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
        // <MainPage></MainPage>
    );
}
