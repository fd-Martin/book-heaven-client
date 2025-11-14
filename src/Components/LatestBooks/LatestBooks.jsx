import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const LatestBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/latest-books`)
      .then((data) => {
        setBooks(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/book-details/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-gray-500 animate-pulse">Loading latest books...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className=" rounded-xl shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold  mb-1">{book.title}</h3>
              <p className="text-sm mb-1">Author: {book.author}</p>
              <p className="text-sm mb-1">Genre: {book.genre}</p>
              <p className="text-sm mb-3">Rating: {book.rating}</p>

              <button
                onClick={() => handleViewDetails(book._id)}
                className="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBooks;
