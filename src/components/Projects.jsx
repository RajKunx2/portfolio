"use client"
// import React, { useEffect, useState, useRef } from 'react';
// import { motion } from 'framer-motion';


// const ZoomingImage = () => {
//     const wrapRef = useRef(null);
//     const [wrapHeight, setWrapHeight] = useState(200); // Initial wrap height
//     const [scale, setScale] = useState(1); // State to keep track of the scale

//     const handleScroll = () => {
//         const vh = window.innerHeight / 100;
//         const scrollTop = document.documentElement.scrollTop;
//         const start = 100 * vh;
//         const stop = wrapHeight * vh;

//         if (scrollTop > start && scrollTop < stop) {
//             // Calculate the new scale based on the scroll position
//             const newScale = Math.max(2.2 - (scrollTop - start) / 500, 1);
//             setScale(newScale);
//         } else if (scrollTop <= start) {
//             // Reset the scale to 1 when the user scrolls back to the top
//             setScale(1);
//         }
//     };

//     useEffect(() => {
//         const updateWrapHeight = () => {
//             // Update wrapHeight state when the window is resized
//             if (wrapRef.current) {
//                 setWrapHeight(wrapRef.current.clientHeight);
//             }
//         };

//         // Add the scroll event listener when the component mounts
//         window.addEventListener('scroll', handleScroll);
//         window.addEventListener('resize', updateWrapHeight);

//         // Remove the scroll event listener when the component unmounts
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             window.removeEventListener('resize', updateWrapHeight);
//         };
//     }, []);

//     return (
//         <div className="flex flex-col items-center h-auto bg-[#f4b8af] py-12 w-screen justify-center align-middle">
//             <motion.section className="wrap" style={{ height: `${wrapHeight}vh` }} ref={wrapRef}>
//                 <motion.h1 style={{ scale: scale }} className="text-center text-5xl lg:text-7xl font-Creative my-8 text-[#d76457]">Projects</motion.h1>
//                 {/* <motion.img
//                     className="zoom w-full sticky top-20vh"
//                     src="=="
//                     style={{ scale: scale }} 
//                 /> */}
//                 <motion.div className='h-[400px] w-full mx-12 bg-white' style={{ scale: scale }} ></motion.div>
//             </motion.section>
//         </div>
//     );
// };

// export default ZoomingImage;

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

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
        <div className="flex flex-col items-center h-auto bg-[#f4b8af] py-12 w-screen justify-center align-middle">
            <motion.section className="wrap" style={{ height: `${wrapHeight}vh` }} ref={wrapRef}>
                <motion.h1 style={{ scale: scale }} className="text-center text-5xl lg:text-7xl font-Creative my-8 text-[#d76457]">Projects</motion.h1>
                {/* <motion.img
                    className="zoom w-full sticky top-20vh"
                    src="=="
                    style={{ scale: scale }} 
                /> */}
                <motion.div
                    className='h-[200px] w-[600px] mx-auto bg-white'
                    style={{ scale: scale }}
                ></motion.div>
            </motion.section>
        </div>
    );
};

export default ZoomingImage;
