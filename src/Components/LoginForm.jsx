//This component is responsible for rendering the login form fields.

// src/components/LoginForm.jsx
import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

export default function LoginForm({ username, password, setUsername, setPassword, error }) {
    return (
        <>
            <div className="input-box">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                <FaUser className="icon" />
            </div>
            <div className="input-box">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                <FaLock className="icon" />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
        </>
    );
}