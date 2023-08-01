import React from 'react';
import SocailText from "./SocialText"
import Link from "next/link"

const Socials = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center w-screen font-sans'>
        <button className="button-56 font-inter basis-1/3 md:ml-20" role="button">
          <Link href="/#Contact">NEED A INTERN? 🧑‍💻</Link>
        </button>
        <button className="button-56 font-inter basis-1/3 md:mx-20" role="button">
          <Link href="/#Contact">NEED A FREELANCER? 💸</Link>
        </button>
        <button className="button-56 font-inter basis-1/3 md:mr-20" role="button">
          <a href="./Raj_resume.pdf">CHECK OUT RESUME 👇</a>
        </button>
      </div>
      <SocailText />
    </>
  );
};

export default Socials;
