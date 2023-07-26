"use client"
import React, { useState, useEffect } from "react";
import Loading from "../components/loading";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import About from "../components/About";
import Skills from "../components/Skills"
import Projects from "../components/Projects"

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-white">
          <Loading />
        </div>
      )}

      <div
        style={{ visibility: isLoading ? "hidden" : "visible" }}
        className="h-screen flex items-center flex-col"
      >
        <Hero />
      </div>
      <div
        style={{ visibility: isLoading ? "hidden" : "visible" }}
        className="h-screen flex items-center flex-col">
        <Socials />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default Home;

