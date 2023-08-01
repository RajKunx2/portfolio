"use client"
// import React, { useState, useEffect } from 'react';
// import LgVideo from "../assets/lg.mp4";
// import SmVideo from "../assets/sm.mp4";

// const BackgroundChanger = () => {
//     const [screenSize, setScreenSize] = useState('');

//     useEffect(() => {
//         function handleResize() {
//             const screenWidth = window.innerWidth;

//             if (screenWidth < 768) {
//                 setScreenSize('small');
//             } else {
//                 setScreenSize('large');
//             }
//         }

//         // Initial check
//         handleResize();

//         // Event listener to detect screen size changes
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     let videoSource = null;

//     if (screenSize === 'small') {
//         videoSource = SmVideo;
//     } else {
//         videoSource = LgVideo;
//     }

//     return (
//         <div className={`h-screen flex items-center justify-center ${screenSize === 'small' ? 'bg-screen-small' : ''} ${screenSize === 'large' ? 'bg-screen-large' : ''}`}>
//             <video autoPlay loop muted className='object-cover'>
//                 <source src={videoSource} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// };

// export default BackgroundChanger;





import React, { useState, useEffect } from 'react';
import LgImage from "../assets/lg.gif"; // Replace with the image for large screens
import SmImage from "../assets/sm.gif"; // Replace with the image for small screens
import Image from "next/image"
const BackgroundChanger = () => {
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                setScreenSize('small');
            } else {
                setScreenSize('large');
            }
        }

        // Initial check
        handleResize();

        // Event listener to detect screen size changes
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let imageSource = null;

    if (screenSize === 'small') {
        imageSource = SmImage;
    } else {
        imageSource = LgImage;
    }

    return (
        <div className={`h-screen flex items-center justify-center ${screenSize === 'small' ? 'bg-screen-small' : ''} ${screenSize === 'large' ? 'bg-screen-large' : ''}`}>
            <Image src={imageSource} alt="Background" className='object-cover w-full h-full' />
        </div>
    );
};

export default BackgroundChanger;
