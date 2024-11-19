// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';
import { MainPage } from './components/mainpage';

export default function App() {
    return (
        <>
            <MainPage></MainPage>
        </>
    
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<LoginPage />} />
        //         <Route path="/dashboard" element={<Dashboard />} />
        //     </Routes>
        // </Router>

        
    );
}
