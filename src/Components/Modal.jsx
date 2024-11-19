// The Modal component will handle showing and hiding the form overlay. 
// It will also render the login or register form based on the isLogin state.
// This component prevents users from accessing the rest of page while the login
// and register forms are opened on the login page.

// src/components/Modal.jsx
import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Modal({ isLogin, closeForm, handleLogin, toggleFormType, username, password, setUsername, setPassword, error }) {
    return (
        <div className="overlay" onClick={closeForm}>
            <div className="wrapper" onClick={(e) => e.stopPropagation()}>
                <div className={`form-box ${isLogin ? 'login' : 'register'}`}>
                    <form onSubmit={handleLogin}>
                        <h1>{isLogin ? 'Login' : 'Register'}</h1>
                        {isLogin ? (
                            <LoginForm
                                username={username}
                                password={password}
                                setUsername={setUsername}
                                setPassword={setPassword}
                                error={error} />
                        ) : (
                            <RegisterForm
                                username={username}
                                password={password}
                                setUsername={setUsername}
                                setPassword={setPassword} />
                        )}
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
    );
}