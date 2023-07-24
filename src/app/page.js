"use client"
import React, { useState, useEffect } from "react";
import Loading from "../components/loading";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import About from "../components/About";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 70);
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
        {/* <Navbar /> */}
        <Hero />
      </div>
      <div
        style={{ visibility: isLoading ? "hidden" : "visible" }}
        className="h-screen flex items-center flex-col">
        <Socials />
        <About />
      </div>
    </div>
  );
};

export default Home;

