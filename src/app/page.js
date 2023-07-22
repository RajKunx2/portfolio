// "use client"
// import React, { useState, useEffect } from "react";
// import Loading from "../components/loading";
// import Hero from "../components/hero";

// const Home = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 10000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <div className="h-screen flex items-center">
//           <Hero />
//         </div>
//       )}
//     </>
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
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="h-screen flex items-center">
          {/* Render the Hero component but keep it hidden */}
          <Hero className="hidden" />
        </div>
      )}
    </>
  );
};

export default Home;
