// src/App.js
import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import LoginPage from "./components/Login";
//import Dashboard from "./components/Dashboard";
import { MainPage } from "./components/mainpage";

/* 
this is where all react components that are web pages should be located 
each web page can have data sent from one to the other using {object/variable name}
inside of the <MainPage {var/object} /> for example.
*/
export default function App() {
  return (
    <>
      <MainPage />
    </>

    // <Router>
    //     <Routes>
    //         <Route path="/" element={<LoginPage />} />
    //         <Route path="/dashboard" element={<Dashboard />} />
    //     </Routes>
    // </Router>
  );
}
