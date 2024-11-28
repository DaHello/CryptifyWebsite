// src/components/HomePage.js
import React from "react";
import "../styles/HomePage.css";
import "../styles/Login.css";

export function HomePage() {
  return (
    <PageWrapper>
      <HeroSection>
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

function HeroSection({ contents }) {
  //
  return (
    <section className="hero-section">
      <h1 className="hero-title">Welcome to Cryptify</h1>
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
        <p2 className="mt-4 text-xl text-gray-500">
          Welcome to Cryptify, where protecting your personal information is our
          top priority. In a world where privacy feels harder to come by, we're
          here to make things simple. Cryptify is designed to be easy to use,
          giving you powerful tools to secure your data without the hassle. We
          believe everyone deserves peace of mind online, and we're committed to
          helping you keep your digital life safe and private. Join us in taking
          control of your information, one secure step at a time.
        </p2>
      </div>
    </section>
  );
}
