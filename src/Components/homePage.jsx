// src/components/HomePage.js
import React from "react";

// styles:
import "../styles/HomePage.css";
import "../styles/Login.css";
import { useOutletContext } from "react-router-dom";

export function HomePage() {
  const currentUser = useOutletContext(); // use the outlet context to get the current user's username

  return (
    <PageWrapper>
      <HeroSection currentUser={currentUser} >
        <HomePageContents />
      </HeroSection>
      <AboutSection />
    </PageWrapper>
  );
}

function PageWrapper({ children }) {
  // use the parameter as a placholder for where html is injected from other functions
  return <div className="page-wrapper">{children}</div>;
}

function HeroSection( {currentUser } ) {
  // This parameter is a placeholder for the contents to be displayed in this section
  //return <section className="hero-section">{contents}</section>;

  return (
    <section className="hero-section">
      <h1 className="hero-title">{currentUser? `Welcome to Cryptify ${currentUser}!`: "Welcome to Cryptify"}</h1>
    </section>
  );
}

//display when you click homepage up top
function HomePageContents() {
  // this is what displays alongside AboutSection
  return (
    <section className="homepage-contents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Welcome to Cryptify
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          Secure your digital life with ease.
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about-section" className="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          About Cryptify
        </h2>
        <p className="mt-4 text-xl text-gray-500">
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
