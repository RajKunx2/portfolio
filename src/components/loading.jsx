"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Lg from "../assets/lg.gif";
import Md from "../assets/md.gif";
import Sm from "../assets/sm.gif";

const BackgroundChanger = () => {
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) {
                setScreenSize('small');
            } else if (screenWidth < 1024) {
                setScreenSize('medium');
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
        imageSource = Sm;
    } else if (screenSize === 'medium') {
        imageSource = Md;
    } else {
        imageSource = Lg;
    }

    return (
        <div className={`h-screen flex items-center justify-center ${screenSize === 'small' ? 'bg-screen-small' : ''} ${screenSize === 'medium' ? 'bg-screen-medium' : ''} ${screenSize === 'large' ? 'bg-screen-large' : ''}`}>
            <Image alt='' src={imageSource} className='object-cover' />
        </div>
    );
};

export default BackgroundChanger;
