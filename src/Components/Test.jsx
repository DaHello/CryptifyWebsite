// src/components/HomePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "../styles/Login.css";

export function HomePage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const toggleFormType = () => setIsLogin(!isLogin);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const handleLogin = (e, username, password) => {
    e.preventDefault();
    if (username && password) {
      navigate("/dashboard", { state: { username } });
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <PageWrapper>
      <Header openForm={openForm} />
      {showForm && (
        <FormOverlay
          isLogin={isLogin}
          closeForm={closeForm}
          toggleFormType={toggleFormType}
          handleLogin={handleLogin}
        />
      )}
      <HeroSection />
      <AboutSection />
    </PageWrapper>
  );
}

function PageWrapper({ children }) {
  return <div className="page-wrapper">{children}</div>;
}

function Header({ openForm }) {
  return (
    <header className="top-bar">
      <Logo />
      <NavLinks openForm={openForm} />
    </header>
  );
}

function Logo() {
  return <h1 className="logo">Cryptify</h1>;
}

function NavLinks({ openForm }) {
  return (
    <nav className="nav-links">
      <NavLink
        text="About"
        onClick={() =>
          document.getElementById("about-section").scrollIntoView({ behavior: "smooth" })
        }
      />
      <NavLink text="Login" onClick={openForm} />
    </nav>
  );
}

function NavLink({ text, onClick }) {
  return (
    <a onClick={onClick}>
      {text}
    </a>
  );
}

function FormOverlay({ isLogin, closeForm, toggleFormType, handleLogin }) {
  const [formState, setFormState] = useState({ username: "", password: "", email: "" });

  const updateField = (field, value) =>
    setFormState((prev) => ({ ...prev, [field]: value }));

  const submitHandler = (e) => {
    if (isLogin) {
      handleLogin(e, formState.username, formState.password);
    } else {
      // Handle registration logic here
      e.preventDefault();
      alert("Registration form submitted");
    }
  };

  return (
    <Overlay onClick={closeForm}>
      <FormWrapper onClick={(e) => e.stopPropagation()}>
        <FormBox
          isLogin={isLogin}
          formState={formState}
          updateField={updateField}
          toggleFormType={toggleFormType}
          submitHandler={submitHandler}
        />
      </FormWrapper>
    </Overlay>
  );
}

function Overlay({ children, onClick }) {
  return <div className="overlay" onClick={onClick}>{children}</div>;
}

function FormWrapper({ children, onClick }) {
  return <div className="wrapper" onClick={onClick}>{children}</div>;
}

function FormBox({ isLogin, formState, updateField, toggleFormType, submitHandler }) {
  return (
    <div className={`form-box ${isLogin ? "login" : "register"}`}>
      <form onSubmit={submitHandler}>
        <h1>{isLogin ? "Login" : "Register"}</h1>
        <InputField
          type="text"
          placeholder="Username"
          value={formState.username}
          onChange={(e) => updateField("username", e.target.value)}
          icon={<FaUser />}
        />
        {!isLogin && (
          <InputField
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={(e) => updateField("email", e.target.value)}
            icon={<FaEnvelope />}
          />
        )}
        <InputField
          type="password"
          placeholder="Password"
          value={formState.password}
          onChange={(e) => updateField("password", e.target.value)}
          icon={<FaLock />}
        />
        {isLogin && <RememberForget />}
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
        <FormToggle isLogin={isLogin} toggleFormType={toggleFormType} />
      </form>
    </div>
  );
}

function InputField({ type, placeholder, value, onChange, icon }) {
  return (
    <div className="input-box">
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} required />
      {icon}
    </div>
  );
}

function RememberForget() {
  return (
    <div className="remember-forget">
      <label>
        <input type="checkbox" />
        Remember me
      </label>
      <a href="#">Forget Password?</a>
    </div>
  );
}

function FormToggle({ isLogin, toggleFormType }) {
  return (
    <div className="register-link">
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <a href="#" onClick={toggleFormType}>
          {isLogin ? "Register" : "Login"}
        </a>
      </p>
    </div>
  );
}

function HeroSection() {
  return <section className="hero-section">{/* Hero content */}</section>;
}

function AboutSection() {
  return (
    <section id="about-section" className="about-section">
      <h2>About Cryptify</h2>
      <p>
        Welcome to Cryptify, where protecting your personal information is our
        top priority. In a world where privacy feels harder to come by, we’re
        here to make things simple. Cryptify is designed to be easy to use,
        giving you powerful tools to secure your data without the hassle. Join
        us in taking control of your information, one secure step at a time.
      </p>
    </section>
  );
}
