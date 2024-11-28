import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// styles:
import "../styles/Login.css";

//Route : the outlet elements tells the route element where and when to render
//the child routes within the page

// allows nested routes to render their element content
export function MainPages() { 
  
    return (
      <div className="page-wrapper">
        <header className="globalHeader" >
          <h1 className="logo" >Cryptify</h1>
          <nav className="nav-links">
            <NavLink to="homepage" >Home</NavLink>
            <NavLink to="mainpagetext">Text Encryption</NavLink>
            <NavLink to="mainpagefile">File Encryption</NavLink>
            <NavLink onClick={openForm} to="login">Login/Signup</NavLink>
            {/* active class */}
          </nav>
        </header>
  
        {/* to output page components */}
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    );

  
}
