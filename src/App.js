// link all css into app file and you do not need to import them inside of each jsx file
// need to cd to src folder

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
//import ForgotPw from './components/ForgotPw';

// All routes each part of the website by URL address
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage somethingtoPass="hello" />} />
        <Route path="/dashboard" element={<Dashboard somethingtoPass />} />
        {/* <Route path="/passwordreset" element={<ForgotPw />} /> */}
      </Routes>
    </Router>
  );
}
