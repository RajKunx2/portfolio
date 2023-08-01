"use client"
import React, { useState, useEffect } from 'react';
import LgVideo from "../assets/lg.mp4";
import SmVideo from "../assets/sm.mp4";

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

    let videoSource = null;

    if (screenSize === 'small') {
        videoSource = SmVideo;
    } else {
        videoSource = LgVideo;
    }

    return (
        <div className={`h-screen flex items-center justify-center ${screenSize === 'small' ? 'bg-screen-small' : ''} ${screenSize === 'large' ? 'bg-screen-large' : ''}`}>
            <video autoPlay loop muted className='object-cover'>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundChanger;
