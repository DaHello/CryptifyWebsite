// src/App.js
import React, { useState } from "react";
//import NavBar from "./components/NavBar"; // navigation bar
//import Home from "./components/Home"; // about us and other info
import { BrowserRouter as Router, Routes, Route, Link, Navlink, NavLink } from "react-router-dom";

//import LoginPage from "./components/Login";
//import Dashboard from "./components/Dashboard";
import { MainPageText } from "./components/mainpagetext";
import "./styles/Login.css"
import { MainPageFile } from "./components/mainpagefile";
import "./styles/GlobalHeader.css"
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

  //import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


  //link = similar to <a> in HTML
  //NavLink allow us to know wether our link is an active or pending state
  // to -> path (must be the same)
  //element = component that you want to use

  export default function App() {
    return (
      <Router>
        <header className="globalHeader">
          <h1>Change scene</h1>
          <nav>
            <NavLink to="mainpagetext">Text Encryption</NavLink>
            <NavLink to="mainpagefile">File Encryption</NavLink>
            {/* active class */}
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="mainpagetext" element={<MainPageText />}></Route>
            <Route path="mainpagefile" element={<MainPageFile />}></Route>
          </Routes>
        </main>
      </Router>

      /* <rt>
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
        </rt> */
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
