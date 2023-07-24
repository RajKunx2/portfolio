"use client"
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ["Your Dream Hire: Here and Now! ",
    "Results Guaranteed: Ready to Excel.",
    "Next-Level Potential: Let's Do This!"];

const App = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index) => index + 1);
        }, 3000);

        return () => clearInterval(intervalId); t
    }, []);

    return (
        <h1 className='font-Creative md:text-5xl text-[26px] lg:text-7xl mt-16 text-[#d76457] h-fit my-4 lg:mt-12'>
            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </h1>
    );
};

export default App;
