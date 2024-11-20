import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
/* import { searchUser, addUser } from '../User.js'; */
import '../styles/Login.css';

// old package.json file start script:
// "start": "PORT=3000 react-scripts start",
// new is the three lines of start to run both json server and react app at same time

export default function LoginPage() { // this is the login page component, since it returns html
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
    const [showForm, setShowForm] = useState(false); // State to show/hide form
    const [username, setUsername] = useState(''); // Store username input
    const [password, setPassword] = useState(''); // Store password input
    const [users, setUsers] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/users') // fetch the data from users.json file server on port 4000
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])

    console.log(users);
    const navigate = useNavigate(); // Hook for navigating

    // functions (do not return html react):
    function toggleFormType() {     // Toggle between login and register for
        return setIsLogin(!isLogin);
    } 
    
    function openForm() {  // Show form
        return setShowForm(true);
    } 
    
    function closeForm() {  // Prevent default form submission
        return setShowForm(false);
    } // Hide form

    function handleLogin(e) {
        e.preventDefault(); // ensure it is not empty

        //call function from user.js to verify
        /* if ( !searchUser(e) ) { // if the user does not exist (function returns false))
            alert('User not found, create a new user');
        } */
        
        if ( !username && !password ) { // if no username AND no password
            alert('Please enter both username and password');
        }
        // navigate to the dashboard URL and show username
        navigate('/dashboard', { state: { username } });

        // old code
        // if (username && password) {
        //     // Assuming successful login
        //     navigate('/dashboard', { state: { username } });
        // } else {
        //     alert('Please enter both username and password');
        // }
    }

    function addUser() { // have these functions here instead of in file Users.js

    }
    function searchuser() {

    }
    function removeUser() {

    }

    function handleRegister(e) {
        e.preventDefault(); // Prevent default form submission

        // call function from user.js to create new user
        /* addUser(e); 
        console.log("New user created: " + e); */

        if (!username && !password) {
            alert('Please enter both username and password');
        }

        // navigate to the dashboard URL and show username
        navigate('/dashboard', { state: { username } });
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
                <div className="overlay" onClick={closeForm}>
                    <div className="wrapper" onClick={(e) => e.stopPropagation()}>
                        <div className={`form-box ${isLogin ? 'login' : 'register'}`}>
                            <form onSubmit={isLogin ? handleLogin : null}>
                                <h1>{isLogin ? 'Login' : 'Register'}</h1>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        placeholder={isLogin ? 'Username' : 'Username'}
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required />
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
                                        required />
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
                                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                                <div className="register-link">
                                    <p>
                                        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                                        <a href="#" onClick={toggleFormType}>
                                            {isLogin ? 'Register' : 'Login'}
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