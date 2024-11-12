import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

export const LoginPage = () => {
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
        console.log('Register clicked, state:', action);
    };

    const loginLink = () => {
        setAction('');
        console.log('Login clicked, state:', action);
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
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
                            Don't have an account? <a href="#" onClick={registerLink}>Register</a>
                        </p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required />
                        <FaEnvelope className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon" />
                    </div>

                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" />
                            I agree to the terms & condition
                        </label>
                    </div>

                    <button type="submit">Register</button>

                    <div className="register-link">
                        <p>
                            Already have an account? <a href="#" onClick={loginLink}>Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
