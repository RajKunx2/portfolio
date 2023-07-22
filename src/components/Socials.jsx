import React from 'react';

const Socials = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-screen'>
      <button className="button-56 font-inter basis-1/3 md:ml-20" role="button">
        NEED A INTERN? 🧑‍💻
      </button>
      <button className="button-56 font-inter basis-1/3 md:mx-20" role="button">
       NEED A FREELANCER? 💸
      </button>
      <button className="button-56 font-inter basis-1/3 md:mr-20" role="button">
        CHECK OUT RESUME 👇
      </button>
    </div>
  );
};

export default Socials;
