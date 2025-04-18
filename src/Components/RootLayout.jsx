import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import LoginSignupButton from "./mainpagecomponents/LoginSignupButton";
import { LogsMenu } from "./LogsMenu";
import { useUser } from "./currentUserContext";

// styles:
import "../styles/Login.css";

// allows nested routes to render their element content
export function MainPages() {  
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [showForm, setShowForm] = useState(false); // State to show/hide form
  const { currentUser, loginUser } = useUser(); // not using lofout function
  const [data, setData] = useState([]); // Store fetched data as an array of objects
  const [showUserOptions, setShowUserOptions] = useState(false); // starts as false

  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // this will run once on mount
  useEffect(() => {
    const fetchData = async () => {
      // fetch users from json server at address, this also fetches the logs
      const response = await fetch("http://localhost:8000/users"); // Replace with actual API call in a real app
      setData(await response.json()); // data is an array of objects, gotten from the json file
    };

    fetchData(); // fetch users array from db.json
  }, []);

  const toggleFormType = () => setIsLogin(!isLogin); // Toggle between login and register form
  const openForm = () => setShowForm(true); // Show form
  const closeForm = () => setShowForm(false); // Hide form
  const openOptions = () => { 
    if (showUserOptions) { // if user options already opened
      setShowUserOptions(false);
    } else {
      setShowUserOptions(true);
    }
  }
  const closeOptions = () => setShowUserOptions(false) // hide user options

  const handleLogin = (clientInfo) => {
    // pass data fetched from db.json
    const { username, password } = clientInfo; // object of data entered by client
    const foundUser = data.find( (data) => data.username === username && data.password === password );
    if (foundUser) {
      // if matching username and pass. found
      console.log(foundUser.username + " was found. Login successful.");
      closeForm(); // close the form
      loginUser(foundUser); // save all user info to currentUser
    } else {
      console.log("Username or password incorrect or does not exist.");
      alert("Invalid username or password, or user does not exist.");
    }
  };

  const handleRegister = (clientInfo) => {
    // pass info entered by user
    const { username, email, password } = clientInfo; // break userInfo into object pattern of client entered data
    console.log(data); // AFTER running useEffect

    // Check if username or email exists already in data object from json
    const userExists = data.some((data) => {
      return data.username === username;
    });
    const emailExists = data.some((data) => {
      return data.email === email;
    }); // boolean function to check if user exists with username, will return true if case

    if (userExists) {
      // if username is in use
      console.log(`${username} already exists.`);
      alert("Username already exists.");
    } else if (emailExists) {
      console.log(`${email} already in use.`);
      alert("Email already in use.");
    } else {
      const newUser = { username, email, password, id: `${data.length + 1}`, logs:[] };
      loginUser(newUser); // Set the full user data as currentUser
      saveToDbJson(newUser);
      alert("Account created successfully.");
      setShowForm(false);
      reset();
    }
  };

  // Simulate saving users to db.json file (This json file holds two arrays of objects log and users)
  const saveToDbJson = async (newUser) => {
    const response = await fetch("http://localhost:8000/users", { // fetch request with POST method to add to users array of objects
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      console.log("New user created successfully.");
    } else {
      console.error("Failed to create new user.");
    }
  };

  //Route : the outlet elements tells the route element where and when to render
  //the child routes within the page

  // THIS IS HEADER (where new pages are added to in, is also same as navigation bar)
  return (
    <div className="page-wrapper">
      <header className="globalHeader">
        <h1 className="logo">Cryptify</h1>
        <nav className="nav-links">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="mainpagetext">Text Encryption</NavLink>
          <NavLink to="mainpagefile">File Encryption</NavLink>

          <LoginSignupButton openForm={openForm} openOptions={openOptions} closeOptions={closeOptions} showUserOptions={showUserOptions} >
            {currentUser.username? `${currentUser.username}`: "Login or Signup"}
          </LoginSignupButton>
          {/* active class */}
        </nav>
      </header>

      {/* This is where all mainpagecomponents go (to outlet), can pass variables through to be accessible by all mainpagecomponents */}
      <main>
        <Outlet context={currentUser} />

        {/* Conditional rendering for logs menu */}
        {showUserOptions && (
          <div className="overlay" onClick={closeOptions}>
            <div className="wrapper" onClick={(e) => e.stopPropagation()}>
              <div className="form-box">
                <LogsMenu closeOptions={closeOptions} data={data} />
              </div>
            </div>
          </div>
        )}

        {/* to output page components */}
        {/*Put your page if you want to */}
        <footer className="footer">
          <h1>Creators:</h1>
          <p>AR-CA-SA : <a href="https://github.com/AR-CA-SA">GitHub</a></p>
          <p>DaHello : <a href="https://github.com/DaHello">GitHub</a></p>
          <p>TrinhT27 : <a href="https://github.com/TrinhT27">GitHub</a></p>
          <p>Patelyug633 : <a href="https://github.com/patelyug633">GitHub</a></p>
          <p>ChangeMe : <a href="link">GitHub</a></p>
          <p>www.cryptify.com</p>
        </footer>
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

                {/* Submit button will show "login" or "register " */}
                <button type="submit">{isLogin ? "Login" : "Register"}</button>

                {/* Switch form link */}
                <div className="register-link">
                  <p>
                    {isLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}{" "}
                    <button
                      className="changeFormButton"
                      onClick={toggleFormType}
                    >
                      {isLogin ? "Register" : "Login"}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* <ShowUserOptions context={currentUser.username} showUserOptions={showUserOptions} openOptions={openOptions} closeOptions={closeOptions} /> */}

    </div>
  );
}
