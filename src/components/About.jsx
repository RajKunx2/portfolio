import React from 'react'
import Image from "next/image"
import Main from "../assets/main.gif"

export default function About() {
    return (
        <div className='h-fit mx-auto mt-8 md:mt-12'>
            <Image alt='' src={Main} />
        </div>
    )
}
