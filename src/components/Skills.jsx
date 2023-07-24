import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image"
import js from "../assets/js.png"
import css from "../assets/css.png"
import html from "../assets/html.png"
import spline from "../assets/spline.png"
import figma from "../assets/figma.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import framer from "../assets/framer.png"
import mongo from "../assets/mongo.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
import three from "../assets/three.png"
import express from "../assets/express.png"
import react from "../assets/react.png"
import next from "../assets/next.png"



const App = () => (
    <div className="md:mt-12">
        <h1 className="text-center text-5xl lg:text-7xl font-Creative my-8 text-[#d76457]">Skillset Symphony</h1>
        <div className="h-16 flex items-center w-screen my-8">
            <Marquee className="py-2 flex gap-4" speed={180}>
                <Image alt="" src={js} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={html} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={css} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={react} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={next} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={git} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={github} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={node} className="h-16 w-16 object-contain mx-24" />
            </Marquee>
        </div>
        <div className="h-16 flex items-center w-screen my-8">
            <Marquee className="py-2 flex gap-4" speed={180} direction="right">
                <Image alt="" src={three} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={framer} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={spline} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={tailwind} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={mongo} className="h-16 w-16 object-contain mx-24" />
                <Image alt="" src={express} className="h-16 w-16 object-contain mx-24" />
            </Marquee>
        </div>
    </div>
);

export default App;