import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const LatestBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3000/latest-books`).then((data) => {
      setBooks(data.data);
      setLoading(false);
    });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/book-details/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg">Loading latest books...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {books.map((book) => (
        <div key={book._id} className="border rounded shadow p-3 flex flex-col">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-48 object-cover mb-2"
          />
          <div className="my-2">
            <h3 className="font-bold text-lg">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
            <p className="text-sm mt-1">{book.genre}</p>
            <p className="text-sm mt-1">Rating: {book.rating}</p>
          </div>
          <button
            onClick={() => handleViewDetails(book._id)}
            className="btn btn-sm btn-primary mt-auto"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default LatestBooks;
