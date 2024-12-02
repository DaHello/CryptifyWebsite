import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import LoginSignupButton from "./mainpagecomponents/LoginSignupButton";

// styles:
import "../styles/Login.css";

//Route : the outlet elements tells the route element where and when to render
//the child routes within the page

// allows nested routes to render their element content
export function MainPages() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [showForm, setShowForm] = useState(false); // State to show/hide form
  const [currentUser, setCurrentUser] = useState({}); // state is an object, can have anything inside it
  const [data, setData] = useState([]); // Store fetched data as an array of objects

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

    fetchData(); // fetch data for users
  }, []);

  // useEffect(() => { // instead just use a
  //   if (currentUserLoggedIn) {
  //     // Perform any side-effects here after successful user logon:
  //     console.log(`${currentUser} is logged in!`);

  //     // Reset currentUserLoggedIn state (so that useEffect doesn't keep running)
  //     setCurrentUserLoggedIn(false);
  //   }
  // }, [currentUserLoggedIn]); // runs when a user is logged in, or currentUser state changes

  const toggleFormType = () => setIsLogin(!isLogin); // Toggle between login and register form
  const openForm = () => setShowForm(true); // Show form
  const closeForm = () => setShowForm(false); // Hide form

  const handleLogin = (clientInfo) => {
    // pass data fetched from db.json
    const { username, password } = clientInfo; // object of data entered by client
    const foundUser = data.find(
      // search data inside the users array for matching usrname and password
      (data) => data.username === username && data.password === password
    );
    if (foundUser) {
      // if matching username and pass. found
      console.log(foundUser.username + " was found. Login successful.");
      closeForm(); // close the form
      setCurrentUser({ username, password });
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
      // Set the current user as this user, this data can be found AFTER running this function
      const runSetCurrentUser = () => {
        setCurrentUser({ username, email, password });
      };
      runSetCurrentUser();
      // Simulate saving the updated users to db.json
      saveToDbJson({ username, email, password });

      alert("Account created successfully.");
      setShowForm(false); // Close the form after successful registration
      reset(); // reset the form fields
    }
  };

  // Simulate saving users to db.json file (This json file holds two arrays of objects log and users)
  const saveToDbJson = async (newUser) => {
    // Calculate current user's id number from total users in db.json:
    const numUsers = data.length + 1;
    console.log(
      `Current user id is: ${numUsers}. Which is the number of users as well.`
    );

    // add the current id number to the newUser:
    newUser = { ...newUser, id: `${numUsers}` }; // keep everything else in newUser, but update the id to be the string of numUsers

    // In a real app, you'd make a POST request to save the updated users to a backend.
    const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        users: "http://localhost:8000/users",
      },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      console.log("New user created successfully.");
    } else {
      console.error("Failed to create new user.");
    }
  };

  // this is where new pages are added to the header
  return (
    <div className="page-wrapper">
      <header className="globalHeader">
        <h1 className="logo">Cryptify</h1>
        <nav className="nav-links">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="mainpagetext">Text Encryption</NavLink>
          <NavLink to="mainpagefile">File Encryption</NavLink>

          <LoginSignupButton openForm={openForm}>
            {currentUser.username? `${currentUser.username}`: "Login or Signup"}
          </LoginSignupButton>
          {/* active class */}
        </nav>
      </header>

      {/* to output page components, pass variables through context to be accessible by all components */}
      <main>
        <Outlet context={currentUser.username} />
        {/* to output page components */}
        {/*Put your page if you want to */}
        <footer className="footer">
          <h1>Creators:</h1>
          <p>AR-CA-SA : <a href="https://github.com/AR-CA-SA">GitHub</a></p>
          <p>DaHello : <a href="https://github.com/DaHello">GitHub</a></p>
          <p>ChangeMe : <a href="link">GitHub</a></p>
          <p>ChangeMe : <a href="link">GitHub</a></p>
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
    </div>
  );
}
