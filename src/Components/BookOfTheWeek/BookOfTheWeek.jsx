import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BookOfTheWeek = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const featuredBook = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic Fiction",
    rating: 4.9,
    description:
      "A timeless novel exploring themes of morality, justice, and humanity in a racially divided society. A must-read for every book lover.",
    coverImage: "./week.jpg",
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2
        className="text-3xl font-bold mt-2 mb-6 text-center"
        data-aos="fade-down"
      >
        Book of the Week
      </h2>

      <div
        className="rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-6 gap-6"
        data-aos="zoom-in"
      >
        {/* Book Cover */}
        <img
          src={featuredBook.coverImage}
          alt={featuredBook.title}
          className="w-full md:w-48 h-64 object-cover rounded-lg shadow-md"
        />

        {/* Book Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {featuredBook.title}
            </h3>
            <p className="mb-2">
              <span className="font-medium">Author:</span> {featuredBook.author}{" "}
              | <span className="font-medium">Genre:</span> {featuredBook.genre}
            </p>
            <p className="text-yellow-600 font-medium mb-4">
              ⭐ {featuredBook.rating}
            </p>
            <p className="mb-4">{featuredBook.description}</p>
          </div>

          <button className="self-start mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg transition">
            Explore Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookOfTheWeek;
