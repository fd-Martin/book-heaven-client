// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

// import { useNavigate } from "react-router";

// const slides = [
//   {
//     id: 1,
//     title: "To Kill a Mockingbird",
//     text: "Harper Lee's timeless classic exploring themes of justice, morality, and humanity in a racially divided society.",
//     img: "./banner-1.png",
//   },
//   {
//     id: 2,
//     title: "1984",
//     text: "George Orwell's dystopian masterpiece about totalitarianism, surveillance, and the power of truth.",
//     img: "./banner-2.png",
//   },
//   {
//     id: 3,
//     title: "Pride and Prejudice",
//     text: "Jane Austen's enduring novel about love, society, and the challenges of the British class system.",
//     img: "./banner-1.png",
//   },
//   {
//     id: 4,
//     title: "The Great Gatsby",
//     text: "F. Scott Fitzgerald's iconic story of wealth, ambition, and the American Dream in the Roaring Twenties.",
//     img: "./banner-3.png",
//   },
// ];

// const Slider = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full h-[400px] md:h-[85vh]">
//       <Swiper
//         modules={[Autoplay, Navigation, Pagination]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         navigation
//         pagination={{ clickable: true }}
//         loop
//         className="h-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative w-full h-full">
//               {/* Background Image */}
//               <img
//                 src={slide.img}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />

//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/80"></div>

//               {/* Elegant Animated Banner */}
//               <div className="absolute inset-0 flex flex-col justify-center items-start  text-white px-5 ms-10">
//                 <h2 className="text-xl md:text-2xl lg:text-4xl font-bold opacity-0 animate-fadeSlideDown">
//                   {slide.title}
//                 </h2>

//                 <p className="mt-4 max-w-2xl text-sm md:text-lg opacity-0 animate-fadeSlideUp delay-200">
//                   {slide.text}
//                 </p>
//               </div>
//                 {/* Buttons */}
//                 <div className="mt-6 flex gap-4 opacity-0 animate-fadeSlideUp delay-300 flex-col md:flex-row justify-center items-center">
//                   <button
//                     onClick={() => navigate("/all-books")}
//                     className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold shadow-lg"
//                   >
//                     All Books
//                   </button>

//                   <button
//                     onClick={() => navigate("/add-a-book")}
//                     className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold shadow-lg"
//                   >
//                     Create Book
//                   </button>
//                 </div>

//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Tailwind Animations */}
//       <style>
//         {`
//         .animate-fadeSlideDown {
//           animation: fadeSlideDown 1s ease forwards;
//         }

//         @keyframes fadeSlideDown {
//           0% { opacity: 0; transform: translateY(-20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }

//         .animate-fadeSlideUp {
//           animation: fadeSlideUp 1.2s ease forwards;
//         }

//         @keyframes fadeSlideUp {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Slider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { useNavigate } from "react-router";

const slides = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    text: "Harper Lee's timeless classic exploring themes of justice, morality, and humanity in a racially divided society.",
    img: "./banner-1.png",
  },
  {
    id: 2,
    title: "1984",
    text: "George Orwell's dystopian masterpiece about totalitarianism, surveillance, and the power of truth.",
    img: "./banner-2.png",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    text: "Jane Austen's enduring novel about love, society, and the challenges of the British class system.",
    img: "./banner-1.png",
  },
  {
    id: 4,
    title: "The Great Gatsby",
    text: "F. Scott Fitzgerald's iconic story of wealth, ambition, and the American Dream in the Roaring Twenties.",
    img: "./banner-3.png",
  },
];

const Slider = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[400px] md:h-[85vh]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center text-white px-6 md:px-20 z-10 text-center md:text-left">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold opacity-0 animate-fadeSlideDown">
                  {slide.title}
                </h2>

                <p className="mt-4 max-w-2xl text-sm md:text-lg opacity-0 animate-fadeSlideUp delay-200">
                  {slide.text}
                </p>

                <div
                  className="mt-6 flex gap-4 opacity-0 animate-fadeSlideUp delay-300 
            flex-col sm:flex-row w-full text-sm "
                >
                  <button
                    onClick={() => navigate("/all-books")}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl 
               font-semibold shadow-lg w-1/2 mx-auto md:mx-0 sm:w-auto text-center"
                  >
                    All Books
                  </button>

                  <button
                    onClick={() => navigate("/add-a-book")}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl 
               font-semibold shadow-lg w-1/2 mx-auto md:mx-0 sm:w-auto text-center"
                  >
                    Create Book
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animations */}
      <style>
        {`
        .animate-fadeSlideDown {
          animation: fadeSlideDown 1s ease forwards;
        }

        @keyframes fadeSlideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeSlideUp {
          animation: fadeSlideUp 1.2s ease forwards;
        }

        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>
    </div>
  );
};

export default Slider;
