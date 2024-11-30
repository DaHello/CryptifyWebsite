// src/components/HomePage.js
import React from "react";
import { useOutletContext } from "react-router-dom";

// styles:
import "../styles/HomePage.css";
import "../styles/Login.css";
//import "../styles/Test.css";

export function HomePage() {
  const currentUsername = useOutletContext(); // use the outlet context to get the current user's username

  return (
    <PageWrapper>
      <HeroSection currentUsername={currentUsername}></HeroSection>
      <AboutSection />
    </PageWrapper>
  );
}

function PageWrapper({ children }) {
  // use the parameter as a placholder for where html is injected from other functions
  return <div className="page-wrapper">{children}</div>;
}

function HeroSection({ currentUsername }) {
  // children is what goes inside of hero-section
  return (
    // <section className="hero-section">
    //   <h1 className="hero-title">{currentUsername? `Welcome, ${currentUsername}!`: "Welcome to Cryptify"}</h1>
    // </section>
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          {currentUsername
            ? `Welcome back, ${currentUsername}!`
            : "Welcome to Cryptify"}
        </h1>
        <p>
          {currentUsername
            ? "Continue your journey to secure your digital life."
            : "Your all-in-one platform for simple and secure encryption."}
        </p>
        {!currentUsername && (
          <button
            className=""
            onClick={() => {
              // Example action for login/signup
              console.log("Sign Up or Log In clicked");
            }}
          >
            Get Started
          </button>
        )}
      </div>
    </section>
  );
}

//display when you click homepage up top
function HomePageContents() {
  // this is what displays alongside AboutSection
  return (
    <section className="homepage-contents">
      <div className="max-w-7xl">
        <h2 className="text-3xl">
          Welcome to Cryptify
        </h2>
        <p>
          Secure your digital life with ease.
        </p>
      </div>
    </section>
  );
}

function FeaturesSection() {
  // Highlights Cryptify's core features
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="text">
          Why Choose Cryptify?
        </h2>
        <div className="grid">
          <FeatureCard
            title="Top-Notch Encryption"
            description="Keep your files and communications secure with our cutting-edge encryption technology."
          />
          <FeatureCard
            title="User-Friendly Interface"
            description="Designed with simplicity in mind, making encryption accessible for everyone."
          />
          <FeatureCard
            title="Cross-Platform Support"
            description="Access your encrypted data from any device, anytime, anywhere."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="feature-card">
      <h3 className="text-xl">{title}</h3>
      <p className="mt-4">{description}</p>
    </div>
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
