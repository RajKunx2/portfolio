"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image"
import css from "../assets/css.png"
import Data from "./Data"

const ZoomingImage = () => {
    const wrapRef = useRef(null);
    const [wrapHeight, setWrapHeight] = useState(200); // Initial wrap height
    const [scale, setScale] = useState(1); // State to keep track of the scale

    const handleScroll = () => {
        const vh = window.innerHeight / 100;
        const scrollTop = document.documentElement.scrollTop;
        const start = 100 * vh;
        const stop = wrapHeight * vh;

        if (scrollTop > start && scrollTop < stop) {
            // Calculate the new scale based on the scroll position
            const newScale = Math.max(2.2 - (scrollTop - start) / 500, 1);
            setScale(newScale);
        } else if (scrollTop <= start) {
            // Reset the scale to 1 when the user scrolls back to the top
            setScale(1);
        }
    };

    useEffect(() => {
        const updateWrapHeight = () => {
            // Update wrapHeight state when the window is resized
            if (wrapRef.current) {
                setWrapHeight(wrapRef.current.clientHeight);
            }
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateWrapHeight);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateWrapHeight);
        };
    }, []);

    return (
        <div className="flex flex-col items-center h-auto bg-none py-12 w-screen justify-center align-middle rounded-2xl">
            <motion.section className="wrap rounded-2xl" style={{ height: `${wrapHeight}vh` }} ref={wrapRef} >
                <motion.h1 style={{ scale: scale }} className="text-center text-5xl lg:text-7xl font-Creative my-8 text-[#d76457]">Projects</motion.h1>
                <div className='flex flex-col md:flex-row flex-wrap w-screen justify-around rounded-2xl'>
                    {Data.map((item, index) => (
                        <motion.div style={{ scale: scale }} key={index} className="object-contain mx-4 sm:mx-auto min-mx-6 group relative block bg-black w-auto h-[300px] my-12 rounded-2xl shadow-2xl shadow-[#d76457] border-[#d76457]">
                            <Image
                                width={1920}
                                height={1080}
                                alt="Developer"
                                src={item.img}
                                className="absolute inset-0 h-full w-full object-cover opacity-75 rounded-2xl transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl">
                                <p className="text-xl font-bold text-white sm:text-2xl">{item.title}</p>
                                <div className="mt-32 sm:mt-48 lg:mt-64 rounded-2xl">
                                    <div className="translate-y-8 transform opacity-0 rounded-2xl transition-all ground-hover:-translate-y-8 md:group-hover:-translate-y-32 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default ZoomingImage;
