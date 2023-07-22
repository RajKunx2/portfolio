// "use client"
// import React, { useState, useEffect } from "react";
// import Loading from "../components/loading";
// import Hero from "../components/hero";

// const Home = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 7400);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative min-h-screen">
//       {isLoading && (
//         <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-white z-50">
//           <Loading />
//         </div>
//       )}
//       <div
//         style={{ visibility: isLoading ? "hidden" : "visible" }}
//         className="relative h-screen flex items-center"
//       >
//         <Hero />
//       </div>
//     </div>
//   );
// };

// export default Home;

"use client"
import React, { useState, useEffect } from "react";
import Loading from "../components/loading";
import Hero from "../components/hero";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-white z-50">
          <Loading />
        </div>
      )}
      <div
        style={{ visibility: isLoading ? "hidden" : "visible" }}
        className="relative h-screen flex items-center"
      >
        {/* The overlapping div */}
        <div className="absolute inset-0 flex items-center justify-center w-full h-full -z-60 text-center">
          {/* Add your overlapping content here */}
          <h2 className="text-white text-7xl font-bold font-Ultra align-middle">YOUR FRIENDLY NEIGHORHOOD DEVELOPER</h2>
        </div>
        <Hero />
      </div>
    </div>
  );
};

export default Home;
