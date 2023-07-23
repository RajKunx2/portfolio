import React from 'react'
import Marquee from "react-fast-marquee";

export default function Navbar() {
    return (
        // <div className="flex justify-center w-screen my-2">
        //     <Marquee gradient={false} speed={80}>
        //         <h1
        //             className="text-[#ffffff] text-2xl font-bold m-0 p-0"
        //         >
        //             YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER <span className="mx-12">RAJ</span>
        //         </h1>
        //     </Marquee>
        //     <Marquee gradient={false} speed={80}>
        //         <h1
        //             className="text-[#ffffff] text-2xl font-bold m-0 p-0"
        //         >
        //             YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER <span className="mx-12">RAJ</span>
        //         </h1>
        //     </Marquee>
        // </div>
        <div className='flex flex-col'>
            <Marquee
            speed={100}>
                <span className='mx-4'>YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER</span>
                <span className='mx-4'>YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER</span>
                <span className='mx-4'>YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER</span>
                <span className='mx-4'>YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER</span>
            </Marquee>
        </div>

    )
}
