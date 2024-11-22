import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "../users.json";

//import { getUser, setUser } from "../User.js"; // no longer needed
import "../styles/Login.css";
//import ForgotPw from './ForgotPw'; if i decide to do this

// this is the login page component, since it returns html
const [isLogin, setIsLogin] = useState(isLogin); // State to toggle between login and register
const [showForm, setShowForm] = useState(false); // State to show/hide form, var and setter, initializes var to false
const [username, setUsername] = useState(username);
const [password, setPassword] = useState(password);
//const [email, setEmail] = useState(""); // may not use emails
const [users, setUsers] = useState([]); // Initially an empty array for users
// or could for simplicity:
// const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     email: ''
//   });

/* fetch initial user data from JSON to users, by set function setUsers(data)*/
// useEffect(() => {
//   // React Hook useEffect will fetch data from users.json file server before any user interaction
//   fetch("http://localhost:3000/users") // fetch from port 3000 (json file server endpoint)
//     .then((res) => res.json())
//     .then((data) => setUsers(data.users)); // will set users via the set function for it
// }, []); // Empty dependency array ensures it runs once, after the first render

useEffect(() => {
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Log the API response to verify
      setUsers(data.users || []); // Ensure users array is populated
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      alert("Error fetching user data");
    });
}, []);

//console.log(users.username);
const navigate = useNavigate(); // Hook for navigating

// functions (do not return html react):
function toggleFormType() {
  // Toggle between login and register for
  return setIsLogin(!isLogin);
}

function openForm() {
  // Show form
  return setShowForm(true);
}

function closeForm() {
  // Prevent default form submission
  return setShowForm(false);
} // Hide form

// function addUser(username, password) {
//   // have these functions here instead of in file Users.js
//   // Check if user already exists
//   if (userExists(username)) {
//     alert("Username already exists");
//     return;
//   }

//   const newUser = { username, password };

//   fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newUser),
//   })
//     .then((response) => {
//       if (response.status === 201) {
//         alert("User created successfully");
//         navigate("/dashboard", { state: { username } });
//       } else {
//         alert("Error: Could not create user");
//       }
//     })
//     .catch((error) => {
//       console.error("Error adding user:", error);
//       alert("Error: Could not connect to the server");
//     });

//   //alert('User created successfully');
//   navigate("/dashboard", { state: { username } });
//   console.log(username + "user");
// }

// test using the console NOT BROWSER console and local is server side, browser is client side
// var test = getUser();
// console.log(test);

// gets event, which is value that is from input
function handleLogin(e) {
  e.preventDefault(); // ensure it is not empty

  if (!username || !password) {
    // if no username OR no password
    alert("Please enter both username and password");
  } else if (users.length === 0) {
    // Check if users data has been fetched
    alert("User data is still loading, please wait...");
  } else if (!userExists(username, password)) {
    alert("Username not found or password incorrect");
  }

  // navigate to the dashboard URL and show username
  navigate("/dashboard", { state: { username } });
}

/* e is an object that has a username, email, and password (abstraction) */
function handleRegister(e) {
  e.preventDefault(); // Prevent default form submission

  if (!username && !password) {
    alert("Please enter both username and password");
  }

  addUser(e);
  console.log("New user created: " + e);

  // navigate to the dashboard URL and show username
  navigate("/dashboard", { state: { username } });
}

export default function LoginPage() {
  var somethingtoPass = "hello";

  somethingtoPass = "goodbye";
  return (
    <div className="page-wrapper">
      <header className="top-bar">
        <h1 className="logo">Cryptify</h1>
        <nav className="nav-links">
          <a
            onClick={() =>
              document
                .getElementById("about-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </a>
          <a onClick={openForm}>Login</a>
        </nav>
      </header>

      {showForm && (
        <div className="overlay" onClick={closeForm}>
          <div className="wrapper" onClick={(e) => e.stopPropagation()}>
            <div className={`form-box ${isLogin ? "login" : "register"}`}>
              <form onSubmit={isLogin ? handleLogin : handleRegister}>
                <h1>{isLogin ? "Login" : "Register"}</h1>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder={isLogin ? "Username" : "Username"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <FaUser className="icon" />
                </div>
                {!isLogin && (
                  <div className="input-box">
                    <input
                      type="email"
                      placeholder="Email"
                      // onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <FaEnvelope className="icon" />
                  </div>
                )}
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
                {isLogin && (
                  <div className="remember-forget">
                    <label className="Remember-me">
                      <input type="checkbox" />
                      Remember me
                    </label>
                    <a href="/forgot pw">Forget Password?</a>
                  </div>
                )}
                <button type="submit">{isLogin ? "Login" : "Register"}</button>
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

      <section className="hero-section">
        {/* Content can be added here if needed */}
      </section>

      <section id="about-section" className="about-section">
        <h2>About Cryptify</h2>
        <p>
          Welcome to Cryptify, where protecting your personal information is our
          top priority. In a world where privacy feels harder to come by, we’re
          here to make things simple. Cryptify is designed to be easy to use,
          giving you powerful tools to secure your data without the hassle. We
          believe everyone deserves peace of mind online, and we're committed to
          helping you keep your digital life safe and private. Join us in taking
          control of your information, one secure step at a time.
        </p>
      </section>
    </div>
  );
}
