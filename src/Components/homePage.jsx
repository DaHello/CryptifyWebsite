import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "../styles/Login.css";

//How do I go about passing variables from client side to server side using react app

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [showForm, setShowForm] = useState(false); // State to show/hide form
  const [username, setUsername] = useState(""); // Store username input
  const [password, setPassword] = useState(""); // Store password input

  const navigate = useNavigate(); // Hook for navigating

  // Toggle between login and register form
  function toggleFormType() {
    return setIsLogin(!isLogin);
  }

  // show form
  function openForm() {
    return setShowForm(true);
  }

  // hide form
  function closeForm() {
    return setShowForm(false);
  }

  function handleLogin(e) {
    e.preventDefault(); // Prevent default form submission
    if (username && password) {
      // Assuming successful login
      navigate("/dashboard", { state: { username } });
    } else {
      alert("Please enter both username and password");
    }
  }

//   if (showForm) {
//     return;
//   } else if (!isLogin) {
//     return;
//   } else if (isLogin) {
//     return;
//   }

  return (
    <div className="page-wrapper">
      <header className="top-bar">
                <h1 className="logo">Cryptify</h1>
                <nav className="nav-links">
                    <a onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })}>About</a>
                    <a onClick={openForm}>Login</a>
                </nav>
            </header>

      {showForm && (
        <div className="overlay" onClick={closeForm}>
          <div className="wrapper" onClick={(e) => e.stopPropagation()}>
            <div className={`form-box ${isLogin ? "login" : "register"}`}>
              <form onSubmit={isLogin ? handleLogin : null}>
                <h1>{isLogin ? "Login" : "Register"}</h1>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder={isLogin ? "Username" : "Username"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <FaUser className="icon" />
                </div>
      {!isLogin && (
                  <div className="input-box">
                    <input type="email" placeholder="Email" required />
                    <FaEnvelope className="icon" />
                  </div>
                )}
      <div className="input-box">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <FaLock className="icon" />
                </div>
      {isLogin && (
                  <div className="remember-forget">
                    <label className="Remember-me">
                      <input type="checkbox" />
                      Remember me
                    </label>
                    <a href="#">Forget Password?</a>
                  </div>
                )}
      <button type="submit">{isLogin ? "Login" : "Register"}</button>
                <div className="register-link">
      <p>
                    {isLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}{" "}
                    <a href="#" onClick={toggleFormType}>
                      {isLogin ? "Register" : "Login"}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <section className="hero-section">
        {/* Content can be added here if needed */}
      </section>

      <section id="about-section" className="about-section">
        <h2>About Cryptify</h2>
        <p>
          Welcome to Cryptify, where protecting your personal information is our
          top priority. In a world where privacy feels harder to come by, we’re
          here to make things simple. Cryptify is designed to be easy to use,
          giving you powerful tools to secure your data without the hassle. We
          believe everyone deserves peace of mind online, and we're committed to
          helping you keep your digital life safe and private. Join us in taking
          control of your information, one secure step at a time.
        </p>
      </section>
    </div>
  );
}
