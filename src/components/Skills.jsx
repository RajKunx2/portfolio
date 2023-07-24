import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image"
import gif from "../assets/main.gif"

const App = () => (
    <>
        <Marquee className="h-fit" speed={120}>
            <Image alt="" src={gif} />
        </Marquee>
        <Marquee className="h-fit" speed={120} direction="right">
            <Image alt="" src={gif} />
        </Marquee></>

);

export default App;