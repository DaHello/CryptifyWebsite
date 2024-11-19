This component is responsible for rendering the registration form fields.

// src/components/RegisterForm.jsx
import React from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

export default function RegisterForm({ username, password, setUsername, setPassword }) {
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
                    type="email"
                    placeholder="Email"
                    required />
                <FaEnvelope className="icon" />
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
            <button type="submit">Register</button>
        </>
    );
};