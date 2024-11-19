// Now, we modify the Login component to be called LoginPage and use the new Modal, 
// LoginForm, and RegisterForm components.

// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'; // Import the modal component
import '../styles/Login.css';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [showForm, setShowForm] = useState(false); // State to show/hide form
  const [username, setUsername] = useState(''); // Store username input
  const [password, setPassword] = useState(''); // Store password input
  const [error, setError] = useState(''); // Store error messages

  const navigate = useNavigate(); // Hook for navigation

  function toggleFormType() {
    return setIsLogin(!isLogin);
  }

  // Toggle between login and register form
  function openForm() {
    return setShowForm(true);
  }

  // Show form
  function closeForm() {
    return setShowForm(false);
  }

  function handleLogin(e) {
    e.preventDefault(); // Prevent default form submission

    // Check if username and password are provided
    if (username && password) {
      // Find user in the imported users data
      const user = usersData.users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setError(''); // Clear any previous error
        // Redirect to the dashboard page if credentials are correct
        navigate('/dashboard', { state: { username } });
      } else {
        setError('Invalid username or password');
      }
    } else {
      setError('Please enter both username and password');
    }
  }

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
        <Modal
          isLogin={isLogin}
          closeForm={closeForm}
          handleLogin={handleLogin}
          toggleFormType={toggleFormType}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          error={error}
        />
      )}

      <section className="hero-section">
        {/* Content can be added here if needed */}
      </section>

      <section id="about-section" className="about-section">
        <h2>About Cryptify</h2>
        <p>
          Welcome to Cryptify, where protecting your personal information is our top priority.
          In a world where privacy feels harder to come by, we’re here to make things simple.
          Cryptify is designed to be easy to use, giving you powerful tools to secure your data without the hassle.
          We believe everyone deserves peace of mind online, and we're committed to helping you keep your digital life safe and private.
          Join us in taking control of your information, one secure step at a time.
        </p>
      </section>
    </div>
  );
}