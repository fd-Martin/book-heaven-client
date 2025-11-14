import React from "react";

const BookOfTheWeek = () => {
  const featuredBook = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic Fiction",
    rating: 4.9,
    description:
      "A timeless novel exploring themes of morality, justice, and humanity in a racially divided society. A must-read for every book lover.",
    coverImage: "./week.jpg",
  };
  const buttonStyle =
    "mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg transition";

  return (
    <>
            <h2 className="text-3xl font-bold mb-2 text-center">
          Book of the Week
        </h2>
    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-6 gap-6 my-6 transform transition duration-300 hover:scale-[1.02]">
        
      <img
        src={featuredBook.coverImage}
        alt={featuredBook.title}
        className="w-full md:w-48 h-64 object-fit rounded-lg shadow-md"
      />
      
      <div className="flex-1">

        <h3 className="text-xl font-semibold mb-2">{featuredBook.title}</h3>
        <p className=" mb-2">
          Author: {featuredBook.author} | Genre: {featuredBook.genre}
        </p>
        <p className=" mb-4">Rating: {featuredBook.rating}</p>
        <p className="">{featuredBook.description}</p>
        <button className={buttonStyle}>Explore Book</button>
      </div>
    </div>
    </>

 

  );
};

export default BookOfTheWeek;
