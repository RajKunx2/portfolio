"use client"
import React, { useState, useEffect } from "react";
import Loading from "../components/loading";
import About from "@/components/About";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import BgVideo from "../assets/video.mp4"; 

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="fixed inset-0 z-[-1000] bg-fixed pointer-events-none">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={BgVideo}
          autoPlay
          muted
          loop
        />
      </div>

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-white">
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
        className="pt-screen flex items-center flex-col"
      >
        <Socials />
        <About />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;

