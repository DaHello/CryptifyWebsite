import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";

// styles:
import "../styles/Login.css";

//Route : the outlet elements tells the route element where and when to render
//the child routes within the page

// allows nested routes to render their element content
export function MainPages({ loginForm }) {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [showForm, setShowForm] = useState(false); // State to show/hide form
  const [users, setUsers] = useState([]); // Store fetched users

  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    // Simulate fetching users from a file (mocking it here)
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:8000/users"); // Replace with actual API call in a real app
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const toggleFormType = () => setIsLogin(!isLogin); // Toggle between login and register form
  const openForm = () => setShowForm(true); // Show form
  const closeForm = () => setShowForm(false); // Hide form

  const handleLogin = (data) => {
    const { username, password } = data;
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      // Assuming successful login
      // navigate('/dashboard', { state: { username } });
      closeForm(); // close the form
    } else {
      alert("Invalid username or password");
    }
  };

  const handleRegister = (data) => {
    const { username, password, email } = data;
    // Check if username or email already exists
    const userExists = users.some(
      (user) => user.username === username || user.email === email
    );
    if (userExists) {
      alert("Username or email already exists");
    } else {
      // Create a new user object
      const newUser = { username, email, password };
      // Simulate adding the new user to the users array (mock saving to JSON)
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);

      // Simulate saving the updated users to users.json
      saveToUsersJson(updatedUsers);
      alert("Account created successfully");
      setShowForm(false); // Close the form after successful registration
      reset(); // Reset form fields
    }
  };

  // Simulate saving users to users.json
  const saveToUsersJson = async (updatedUsers) => {
    // In a real app, you'd make a POST request to save the updated users to a backend.
    const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        users: "http://localhost:8000/users",
      },
      body: JSON.stringify(updatedUsers),
    });

    if (response.ok) {
      console.log("Users saved successfully");
    } else {
      console.error("Failed to save users");
    }
  };

  // this is where new pages are added to the header
  return (
    <div className="page-wrapper">
      <header className="globalHeader">
        <h1 className="logo">Cryptify</h1>
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="mainpagetext">Text Encryption</NavLink>
          <NavLink to="mainpagefile">File Encryption</NavLink>
          {/* <NavLink onClick={openForm} to="login">Login/Signup</NavLink> */}
          <a type="button" href="#" onClick={openForm}>
            Login or Signup
          </a>
          {/* active class */}
        </nav>
      </header>

      {/* to output page components */}
      <main>
        <Outlet></Outlet>
      </main>

      {/* Login Form to be displayed throughout different pages */}
      {showForm && (
        <div className="overlay" onClick={closeForm}>
          <div className="wrapper" onClick={(e) => e.stopPropagation()}>
            <div className={`form-box ${isLogin ? "login" : "register"}`}>
              <form
                onSubmit={handleSubmit(isLogin ? handleLogin : handleRegister)}
              >
                <h1>{isLogin ? "Login" : "Register"}</h1>

                {/* Username input */}
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Username"
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />
                  <FaUser className="icon" />
                </div>
                {errors.username && <p>{errors.username.message}</p>}

                {/* Email input (only for registration) */}
                {!isLogin && (
                  <div className="input-box">
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    <FaEnvelope className="icon" />
                  </div>
                )}
                {errors.email && <p>{errors.email.message}</p>}

                {/* Password input */}
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <FaLock className="icon" />
                </div>
                {errors.password && <p>{errors.password.message}</p>}

                {/* Remember me and forget password links for login */}
                {isLogin && (
                  <div className="remember-forget">
                    <label className="Remember-me">
                      <input type="checkbox" />
                      Remember me
                    </label>
                    <a href="#">Forget Password?</a>
                  </div>
                )}

                {/* Submit button */}
                <button type="submit">{isLogin ? "Login" : "Register"}</button>

                {/* Switch form link */}
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
    </div>
  );
}
