// src/components/HomePage.js
import React from "react";
import { useOutletContext } from "react-router-dom";

// styles:
import "../styles/HomePage.css";
import "../styles/Login.css";

export function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <AboutSection />
    </PageWrapper>
  );
}

function PageWrapper({ children }) {
  // use the parameter as a placholder for where html is injected from other functions
  return <div className="page-wrapper">{children}</div>;
}

function HeroSection() {
  const currentUsername = useOutletContext(); // use the outlet context to get the current user's username
  
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          {currentUsername
            ? `Welcome back, ${currentUsername}!`
            : "Welcome to Cryptify"}
        </h1>
        <p className="hero-subtitle">
          {currentUsername
            ? "Continue your journey to secure your digital life."
            : "Your all-in-one platform for simple and secure encryption."}
        </p>
        {!currentUsername && (
          <button
            className="enter-button"
            onClick={() => {
              window.location.href = "/mainpagefile"; // Navigate to encryption page
            }}
          >
            Get Started
          </button>
        )}
      </div>
    </section>
  );
}

// if we decide to add extra contents to the hompage
function HomePageContents() {
  return (
    <section className="homepage-contents">
      <div className="max-w-7xl">
        <h2 className="text-3xl">
          Extra Content
        </h2>
        <p>
          Secure your digital life with ease.
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about-section" className="about-section">
      <div className="max-w-7xl">
        <h2 className="text-3xl">
          About Cryptify
        </h2>
        <p className="mt-4">
          Welcome to Cryptify, where protecting your personal information is our
          top priority. In a world where privacy feels harder to come by, we're
          here to make things simple. Cryptify is designed to be easy to use,
          giving you powerful tools to secure your data without the hassle. We
          believe everyone deserves peace of mind online, and we're committed to
          helping you keep your digital life safe and private. Join us in taking
          control of your information, one secure step at a time.
        </p>
      </div>
    </section>
  );
}
