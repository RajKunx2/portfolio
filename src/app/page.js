"use client"
import React, { useState, useEffect } from "react";
import Loading from "../components/loading";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-white">
          <Loading />
        </div>
      )}

      <div
        style={{ visibility: isLoading ? "hidden" : "visible" }}
        className="relative h-screen flex items-center flex-col"
      >
        {/* <Navbar /> */}
        <Hero />
        <Socials />
      </div>

    </div>
  );
};

export default Home;
