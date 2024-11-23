// src/App.js
import React, { useState } from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
//import NavBar from "./components/NavBar"; // navigation bar
//import Home from "./components/Home"; // about us and other info
//import LoginPage from "./components/Login";
//import Dashboard from "./components/Dashboard";

//layout
import { MainPages } from "./components/RootLayout";
import { MainPageText } from "./components/mainpagetext";
import { MainPageFile } from "./components/mainpagefile";

//css
import "./styles/GlobalHeader.css";
import "./styles/App.css";
//import "./styles/Login.css";

/* 
this is where all react components that are web pages should be located 
each web page can have data sent from one to the other using {object/variable name}
inside of the <MainPage {var/object} /> for example.
*/

//link = similar to <a> in HTML
//NavLink allow us to know wether our link is an active or pending state
// to -> path (must be the same)
//element = component that you want to use

//tree of routes
const router = createBrowserRouter(
  //similar to <routes>?
  createRoutesFromElements(
    <Route path="/" element={<MainPages />}>
      <Route path="mainpagetext" element={<MainPageText />}></Route>
      <Route path="mainpagefile" element={<MainPageFile />}></Route>
    </Route>
  )
);

export default function App() {
  return (
    <RouterProvider router={router} />
    //provides the router that we created using the above function
  );
}
