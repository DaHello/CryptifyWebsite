// src/components/LoginPage/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './styles/Login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Navigate to the dashboard, passing the username as state
        navigate('/dashboard', { state: { username } });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('User registered with:', { username, email, password });
    };

    return (
        <div className={`wrapper${isLogin ? '' : ' active'}`}>
            {isLogin ? (
                <div className="form-box login">
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input 
                                type="text" 
                                placeholder="Username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                            <FaUser className="icon" />
                        </div>
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
                        <div className="remember-forget">
                            <label className='Remember-me'>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <a href="#">Forget Password?</a>
                        </div>
                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p className='account'>
                                Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Register</a>
                            </p>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="form-box register">
                    <form onSubmit={handleRegister}>
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input 
                                type="text" 
                                placeholder="Username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <FaEnvelope className="icon" />
                        </div>
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
                        <div className="remember-forget">
                            <label>
                                <input type="checkbox" />
                                I agree to the terms & conditions
                            </label>
                        </div>
                        <button type="submit">Register</button>
                        <div className="register-link">
                            <p>
                                Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
