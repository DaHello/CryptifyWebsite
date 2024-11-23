// src/App.js
import React, { useState } from "react";
//import Home from "./components/Home"; // about us and other info
import { createBrowserRouter, Route, creat } from "react-router-dom";
//import LoginPage from "./components/Login";
//import Dashboard from "./components/Dashboard";
import { MainPage } from "./components/mainpage";
import "./styles/Login.css";

//this is the header
// const router = createBrowserRouter(
//   //similar to <routes>?
//   createRoutesFromElements(
//     <Route path="mainpagetext" exact element={<MainPages />}>
//       <Route path="mainpagetext" element={<MainPageText />}></Route>
//       <Route path="mainpagefile" element={<MainPageFile />}></Route>
//     </Route>
//   )
// );

//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//tree of routes
const router = createBrowserRouter(
  //similar to <routes>?
  createRoutesFromElements(
    <Route path="mainpagetext" exact element={<MainPages />}>
      <Route path="mainpagetext" element={<MainPageText />}></Route>
      <Route path="mainpagefile" element={<MainPageFile />}></Route>
    </Route>
  )
);

export default function App() {
  // Load the header of the App (website), inject code for header

  // Have the mainpage where all forms all located
  // rename to mainPage

  // Have the aboutUs.jsx

  return (
    <RouterProvider router={router} />

    // <>
    //   <MainPage />
    // </>
  );
}
