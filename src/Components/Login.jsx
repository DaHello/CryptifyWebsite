import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import '../styles/Login.css';

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
    const [showForm, setShowForm] = useState(false); // State to show/hide form
    const [username, setUsername] = useState(''); // Store username input
    const [password, setPassword] = useState(''); // Store password input
    const [email, setEmail] = useState(''); // Store email input (for registration)
    const [users, setUsers] = useState([]); // Store fetched users
    const navigate = useNavigate(); // Hook for navigating
    
    useEffect(() => {
        // Simulate fetching users from a file (mocking it here)
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:8000/users'); // Replace with actual API call in a real app
            const data = await response.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    const toggleFormType = () => setIsLogin(!isLogin); // Toggle between login and register form
    const openForm = () => setShowForm(true); // Show form
    const closeForm = () => setShowForm(false); // Hide form

    function handleRegister(e) {
        e.preventDefault(); // Prevent default form submission
        if (username && password && email) {
            // Check if username or email already exists
            const userExists = users.some(user => user.username === username || user.email === email);
            if (userExists) {
                alert('Username or email already exists');
            } else {
                // Create a new user object
                const newUser = { username, email, password };
                // Simulate adding the new user to the users array (mock saving to JSON)
                const updatedUsers = [...users, newUser];
                setUsers(updatedUsers);

                // Simulate saving the updated users to users.json
                saveToUsersJson(updatedUsers);
                alert('Account created successfully');
                setShowForm(false); // Close the form after successful registration
            }
        } else {
            alert('Please fill in all fields');
        }
    }

    // Simulate saving users to users.json
    const saveToUsersJson = async (updatedUsers) => {
        // In a real app, you'd make a POST request to save the updated users to a backend.
        const response = await fetch('/save-users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUsers),
        });

        if (response.ok) {
            console.log('Users saved successfully');
        } else {
            console.error('Failed to save users');
        }
    };

    return (
        <div className="page-wrapper">

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

        </div>
    );
}
