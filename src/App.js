// src/App.js
import React, { useState } from "react";
//import NavBar from "./components/NavBar"; // navigation bar
//import Home from "./components/Home"; // about us and other info
import { createBrowserRouter, Routes, Route, Link } from "react-router-dom";
//import LoginPage from "./components/Login";
//import Dashboard from "./components/Dashboard";
import { MainPage } from "./components/mainpage";
import "./styles/Login.css";
// import {MainPage} from "./components/mainpage";
// import "./styles/App.css";

/* 
this is where all react components that are web pages should be located 
each web page can have data sent from one to the other using {object/variable name}
inside of the <MainPage {var/object} /> for example.
*/
//export default function App() {
//   const [activeTab, setActiveTab] = useState("home");

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "home":
//         return <Home />;
//       case "encryptFiles":
//         return <EncryptFiles />;
//       case "encryptText":
//         return <EncryptText />;
//       default:
//         return <Home />;
//     }
//  };

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

export default function App() {
  // Load the header of the App (website), inject code for header

  // Have the mainpage where all forms all located
  // rename to mainPage

  // Have the aboutUs.jsx

  return (
    <>
      <MainPage />

      {/* <rt>
          <Router>
            <div className="App">
              <Link to="/mainpage">MainPage</Link>
              <Link to="/home">Home</Link>

              <Routes>
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/home" element={<Home />} />
              </Routes>
            </div>
          </Router>
        </rt> */}
    </>
  );
}

// old code...
// return (
//   <>
//     <MainPage />
//   </>

// <Router>
//     <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//     </Routes>
// </Router>
// );
