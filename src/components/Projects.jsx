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
        if (inView1) {
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
                <div className='flex flex-col md:flex-row flex-wrap w-screen justify-around rounded-2xl'>
                    {Data.map((item, index) => (
                        <motion.div ref={ref2}
                            animate={controls}
                            initial="hidden"
                            transition={{ duration: 1 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 60 },
                            }} key={index} className="object-contain mx-4 sm:mx-auto min-mx-6 group relative block bg-black w-auto h-[300px] my-12 rounded-2xl shadow-2xl shadow-[#d76457] border-[#d76457]">
                            <Image
                                width={1920}
                                height={1080}
                                alt="Developer"
                                src={item.img}
                                className="absolute inset-0 h-full w-full object-cover opacity-75 rounded-2xl transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl">
                                <p className="text-xl font-bold text-white sm:text-2xl font-Dosis">{item.title}</p>
                                <div className="mt-32 sm:mt-48 lg:mt-64 rounded-2xl">
                                    <div className="translate-y-8 transform opacity-0 rounded-2xl transition-all ground-hover:-translate-y-32 md:group-hover:-translate-y-32 group-hover:opacity-100">
                                        <p className="text-base mb-2 md:mb-4 md:text-lg md:my-2 font-Josefin font-medium text-white">
                                            {item.desc}
                                        </p>
                                        <a className='bg-slate-900 rounded-2xl px-4 py-2 text-base mb-8 md:mb-0 md:text-lg md:my-2 font-Josefin font-bold text-white' href={item.link}> Link 🔗</a>
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
