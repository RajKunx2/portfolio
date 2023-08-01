import React, { useRef,useEffect } from 'react';
import Image from 'next/image';
import emailjs from "emailjs-com";
import Contact from "../assets/contact.png";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

const SignUpComponent = () => {
    const controls = useAnimation();
    const [ref1, inView1] = useInView({ threshold: 0.01 });

    useEffect(() => {
        if (inView1) {
            controls.start("visible");
        }
    }, [controls, inView1]);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jk8jh3o', 'template_5l6fezz', form.current, 'v0txexV6zNsPVbDmP')
            .then((result) => {
                alert("Your Message has been Sent!");
                console.log(result.text);
                form.current.reset(); // Use form.current to reset the form
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <motion.div
            ref={ref1}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 60 },
            }} className="relative lg:py-20" id='Contact'>
            <div className="flex flex-col items-center justify-between pt-0 md:pr-10 pb-0 md:pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
                <div className="flex flex-col items-center w-full pt-5 pr-10 pb-8 pl-10 lg:pt-20 lg:flex-row bg-white/30 backdrop-blur-md rounded-2xl">
                    <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                        <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                            <Image width={1080} height={1920} src={Contact} alt="button" />
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 lg:mt-0 lg:w-5/12">
                        <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                            <p className="w-full text-4xl font-medium text-center leading-snug font-Creative">Contact Me</p>
                            <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                <div className="relative">
                                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Name</p>
                                    <input name="from_name" placeholder="" type="text" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                                </div>
                                <div className="relative">
                                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                                    <input name="user_email" placeholder="" type="text" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                                </div>
                                <div className="relative">
                                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Query</p>
                                    <input name="message" placeholder="" type="word" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                                </div>
                                <div className="relative">
                                    <button type="submit" value="Send" onClick={sendEmail} className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease font-Oswald">Submit</button>
                                </div>
                            </div>
                        </div>
                        <svg viewBox="0 0 91 91" className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300 fill-current">
                            <g stroke="none" strokeWidth="1" fillRule="evenodd">
                                {/* SVG content */}
                            </g>
                        </svg>
                        <svg viewBox="0 0 91 91" className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500 fill-current">
                            <g stroke="none" strokeWidth="1" fillRule="evenodd">
                                {/* SVG content */}
                            </g>
                        </svg>
                    </form>
                </div>
            </div>
        </motion.div>

    );
};

export default SignUpComponent;
