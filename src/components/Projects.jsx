"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image"
import Data from "./Data"
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

const ZoomingImage = () => {

    const controls = useAnimation();
    const [ref1, inView1] = useInView({ threshold: 0.01 });

    useEffect(() => {
        if (inView1) {
            controls.start("visible");
        }
    }, [controls, inView1]);

    const [ref2, inView2] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView2) {
            controls.start("visible");
        }
    }, [controls, inView2]);

    return (
        <div className="flex flex-col items-center h-auto bg-none py-12 w-screen justify-center align-middle rounded-2xl">
            <motion.section className="wrap rounded-2xl" >
                <motion.h1 ref={ref1}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 60 },
                    }} className="text-center text-5xl lg:text-7xl font-Creative my-8 text-[#d76457]">Projects</motion.h1>
                <div className='flex flex-col md:flex-row md:flex-wrap w-screen justify-around rounded-2xl'>
                    {Data.map((item, index) => (
                        <motion.div ref={ref2}
                            animate={controls}
                            initial="hidden"
                            transition={{ duration: 1 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 60 },
                            }} key={index} className="border-4 bg-blend-multiply object-contain group relative block bg-black w-[354px] h-[200px] my-12 rounded-[20px] shadow-2xl shadow-[#d76457] border-[#d76457] mx-auto md:mx-4">
                            <Image
                                width={708}
                                height={400}
                                alt="Developer"
                                src={item.img}
                                className="absolute inset-0 h-full w-full object-cover opacity-75 rounded-2xl transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl">
                                <p className="text-xl font-bold text-white sm:text-2xl font-Dosis">{item.title}</p>
                                <div className="mt-32 sm:mt-48 lg:mt-64 rounded-2xl">
                                    <div className="relative top-0 left-0 translate-y-8 transform opacity-0 rounded-2xl transition-all group-hover:-translate-y-4 md:group-hover:-translate-y-44 group-hover:opacity-100">
                                        <a className='bg-[#d76457] rounded-2xl py-2 px-4 text-base mb-12 md:mb-0 md:text-lg font-Josefin font-bold text-white' href={item.link}> Link 🔗</a>
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
