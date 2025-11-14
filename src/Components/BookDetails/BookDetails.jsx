import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/book-details/${id}`).then((res) => {
      setBook(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>Book not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-96 object-cover mb-4"
      />
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p className="text-gray-600">{book.author}</p>
      <p className="mt-2 font-medium">Genre: {book.genre}</p>
      <p className="mt-2">Rating: {book.rating}</p>
      <p className="mt-4">{book.summary}</p>
    </div>
  );
};

export default BookDetails;
