"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image"
import Loading from "../components/loading";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import About from "../components/About";
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import AboutMe from "../components/AboutMe"
import Bg from "../assets/bggif.gif"

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <div class="h-screen w-screen relative top-0 left-0 z-[-1000] bg-fixed">
        <Image class="absolute top-0 left-0 w-full h-full object-cover" src={Bg} alt="" width={1920} height={1080} />
      </div>
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
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;

