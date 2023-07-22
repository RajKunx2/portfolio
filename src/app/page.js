"use client"
import React, { useState, useEffect } from "react";
import Loading from "../components/loading";
import Hero from "../components/hero";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        ""
      )}
      <div style={{ visibility: isLoading ? "hidden" : "visible" }} className="h-screen flex items-center">
        <Hero />
      </div>   </>
  );
};

export default Home;
