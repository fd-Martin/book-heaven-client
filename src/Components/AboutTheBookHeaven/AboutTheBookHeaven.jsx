// import React from "react";

// const AboutTheBookHaven = () => {
//   return (
//     <div className=" rounded-xl shadow-lg py-12 my-6 text-center md:text-left transform transition duration-300 hover:scale-[1.02]">
//       <h2 className="text-3xl font-bold text-center mb-4">
//         About The Book Haven
//       </h2>
//       <p className="text-lg mt-6 px-12 text-center">
//         The Book Haven is a cozy online space for book lovers to explore,
//         discover, and share their favorite reads. From classics to modern
//         masterpieces, we bring a curated collection to your fingertips. Dive
//         into the world of books with us and find your next great read today!
//       </p>
//     </div>

//   );
// };

// export default AboutTheBookHaven;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutTheBookHaven = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="rounded-xl shadow-lg py-12 my-6 text-center md:text-left">
      <h2 className="text-3xl font-bold text-center mb-4" data-aos="flip-left">
        About The Book Haven
      </h2>

      <p className="text-lg mt-6 px-12 text-center" data-aos="fade-down">
        The Book Haven is a cozy online space for book lovers to explore,
        discover, and share their favorite reads. From classics to modern
        masterpieces, we bring a curated collection to your fingertips. Dive
        into the world of books with us and find your next great read today!
      </p>
    </div>
  );
};

export default AboutTheBookHaven;
