// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [bookLoading, setBookLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/book-details/${id}`)
//       .then((res) => {
//         setBook(res.data);
//         setBookLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setBookLoading(false);
//       });
//   }, [id]);

//   if (bookLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <span className="loading loading-spinner text-success text-3xl"></span>
//       </div>
//     );
//   }

//   if (!book) return <p className="text-center mt-8">Book not found</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <img
//         src={book.coverImage}
//         alt={book.title}
//         className="w-full h-96 object-cover mb-4"
//       />
//       <h1 className="text-3xl font-bold">{book.title}</h1>
//       <p className="text-gray-600">{book.author}</p>
//       <p className="mt-2 font-medium">Genre: {book.genre}</p>
//       <p className="mt-2">Rating: {book.rating}</p>
//       <p className="mt-4">{book.summary}</p>
//     </div>
//   );
// };

// export default BookDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [bookLoading, setBookLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/book-details/${id}`)
      .then((res) => {
        setBook(res.data);
        setBookLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setBookLoading(false);
      });
  }, [id]);

  if (bookLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-success text-3xl"></span>
      </div>
    );
  }

  if (!book) return <p className="text-center mt-8">Book not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6 bg-base-100 text-base-content rounded-lg shadow-lg border border-base-300 transition-all">
      {/* Book Cover */}
      <div className="w-full h-[420px] overflow-hidden rounded-lg shadow-md">
        <img
          src={book?.coverImage}
          alt={book.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/dummy.jpg";
          }}
        />
      </div>

      {/* Text Section */}
      <div className="mt-6">
        <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
        <p className="text-lg opacity-70 mb-4">By {book.author}</p>

        <div className="space-y-2">
          <p className="font-medium">
            <span className="font-bold">Genre:</span> {book.genre}
          </p>
          <p className="font-medium">
            <span className="font-bold">Rating:</span> {book.rating} ⭐
          </p>
        </div>

        <p className="mt-6 leading-relaxed text-base">{book.summary}</p>
      </div>
    </div>
  );
};

export default BookDetails;
