import React from "react";
import lg from "../assets/lg.gif";
import md from "../assets/md.gif";
import sm from "../assets/sm.gif";
import Image from "next/image";

const Loading = () => {
    // Function to get the current screen size
    const getScreenSize = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 640) return "sm"; // Small screens
            else if (window.innerWidth < 768) return "md"; // Medium screens
        }
        return "lg"; // Default for larger screens or when window is not available
    };

    // Get the appropriate image source based on the screen size
    const getImageSource = () => {
        const screenSize = getScreenSize();
        switch (screenSize) {
            case "sm":
                return sm;
            case "md":
                return md;
            default:
                return lg;
        }
    };

    return (
        <div className="h-screen w-screen">
            <Image alt="" src={getImageSource()} />
        </div>
    );
};

export default Loading;

