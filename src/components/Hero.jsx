import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const Scene3D = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Get a reference to the canvas element
        const canvas = canvasRef.current;

        // Initialize the application
        const app = new Application(canvas);

        // Load the Spline scene
        app.load('https://prod.spline.design/tfT7UR6Oj0N2HguX/scene.splinecode');

        // Cleanup: Make sure to destroy the app when the component unmounts
        return () => {
            // app.destroy();
        };
    }, []);

    return (
        <>
            <div className="">
                <canvas ref={canvasRef} className="my-12" id="canvas3d" />
            </div>
        </>

    );
};

export default Scene3D;


