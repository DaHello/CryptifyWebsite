import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";

// styles:
import "../styles/Login.css";

//Route : the outlet elements tells the route element where and when to render
//the child routes within the page

// allows nested routes to render their element content
export function MainPages() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [showForm, setShowForm] = useState(false); // State to show/hide form
  const [currentUser, setCurrentUser] = useState(
    //username:"",
    //email:"",
    //password:""
  ); // state is an object, can have anything inside it
  const [data, setData] = useState([]); // Store fetched data as an array of objects
  //const [log, setLog] = useState([]); // Store fetched array of objects for logs for each user, 
                                      // each user object has an array of log objects inside it

  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    // fetch json file from server at address:
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/users"); // Replace with actual API call in a real app
      setData( await response.json() ); // data is an array of objects, gotten from the json file
      
    };

    // const fetchLogs = async () => {
    //   const response = await fetch("http://localhost:8000/logs"); // fetch the logs from the address to be added to
    //   setLog( await response.json() );
    // }

    fetchData(); // call the function to fetch the data
    //fetchLogs(); // call the function to fetch the logs
  }, []);

  const toggleFormType = () => setIsLogin(!isLogin); // Toggle between login and register form
  const openForm = () => setShowForm(true); // Show form
  const closeForm = () => setShowForm(false); // Hide form

  const handleLogin = (clientInfo) => { // pass data fetched from db.json
    const { username, password } = clientInfo; // object of data entered by client
    const foundUser = data.find( // search data inside the users array for matching usrname and password
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      // if matching username and password was found:
      // Old code: navigate('/dashboard', { state: { username } });
      console.log(foundUser.username + " was found. Login successful.");
      closeForm(); // close the form

      // redirect to the page with their name and no login feature or sign up option.
    } else {
      console.log(foundUser.username + " password or username incorrect or does not exist.")
      alert("Invalid username or password, or user does not exist.");
    }
  };

  const handleRegister = (clientInfo) => { // pass info entered by user
    const { username, email, password } = clientInfo; // break userInfo into object pattern of client entered data
    console.log(data); // AFTER running useEffect

    // Check if username or email exists already in data object from json
    const userExists = data.some( (user) => { return user.username === username; } );
    const emailExists = data.some( (user) => { return user.email === email } ); // boolean function to check if user exists with username, will return true if case

    if (userExists ) { // if username is in use
      console.log(`${username} already exists.`);
      alert("Username already exists.");
    } else if(emailExists) {
      console.log(`${email} already in use.`);
      alert("Email already in use.");
    } else {
      
      // Set the current user as this user, this data can be found AFTER running this function
      setCurrentUser( {username, email, password} );

      // Simulate saving the updated users to db.json
      saveToDbJson( {username, email, password} );
  
      alert("Account created successfully.");
      setShowForm(false); // Close the form after successful registration

      // redirect to new RootLayoutPage after user is logged in:


      reset(); // Reset form fields (MIGHT CAUSE ISSUES WITH getting currentUser name)
    }
  };

  // Simulate saving users to db.json file (This json file holds two arrays of objects log and users)
  const saveToDbJson = async (newUser) => {

    // Calculate current user's id number from total users in db.json:
    const numUsers = data.length + 1;
    console.log(`Current user id is: ${numUsers}. Which is the number of users as well.`);

    // add the current id number to the newUser:
    newUser = {...newUser, id:`${numUsers}`};  // keep everything else in newUser, but update the id to be the string of numUsers

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
          <NavLink to="/">Home</NavLink>
          <NavLink to="mainpagetext">Text Encryption</NavLink>
          <NavLink to="mainpagefile">File Encryption</NavLink>
          <button className="openFormButton" type="button" onClick={openForm}>
            Login or Signup
          </button>
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
                    <button className="changeFormButton" onClick={toggleFormType}>
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
