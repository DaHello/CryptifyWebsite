// src/components/LoginPage/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'user' && password === 'password') {
            setError('');
            navigate('/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
