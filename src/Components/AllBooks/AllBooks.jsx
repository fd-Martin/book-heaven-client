// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

// const AllBooks = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   useEffect(() => {
//     axios.get(`http://localhost:3000/latest-books`).then((data) => {
//       setBooks(data.data);
//       setLoading(false);
//     });
//   }, []);

//   const handleViewDetails = (id) => {
//     navigate(`/book-details/${id}`);
//   };
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <p className="text-lg">Loading All books...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {books.map((book) => (
//         <div key={book._id} className="border rounded shadow p-3 flex flex-col">
//           <img
//             src={book.coverImage}
//             alt={book.title}
//             className="w-full h-48 object-cover mb-2"
//           />
//           <div className="my-2">
//             <h3 className="font-bold text-lg">{book.title}</h3>
//             <p className="text-sm text-gray-100">{book.author}</p>
//             <p className="text-sm mt-1">{book.genre}</p>
//             <p className="text-sm mt-1">Rating: {book.rating}</p>
//           </div>
//           <button
//             onClick={() => handleViewDetails(book._id)}
//             className="btn btn-sm btn-primary mt-auto"
//           >
//             View Details
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllBooks;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/latest-books")
      .then((res) => {
        setBooks(res.data);
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
        <p className="text-lg">Loading All Books...</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4">All Books</h2>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full min-w-[600px]">
          <thead>
            <tr>
              <th>#</th>
              <th>Cover</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <th>{index + 1}</th>

                <td>
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-12 h-16 sm:w-16 sm:h-20 object-cover rounded"
                  />
                </td>

                <td className="font-medium">{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.rating}</td>

                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleViewDetails(book._id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile-friendly Grid View (optional) */}
      <div className="block sm:hidden mt-6">
        <h3 className="font-bold text-lg mb-3">Mobile View</h3>

        <div className="grid grid-cols-1 gap-4">
          {books.map((book) => (
            <div
              key={book._id}
              className="border p-3 rounded shadow bg-base-100"
            >
              <div className="flex gap-3">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-20 h-28 object-cover rounded"
                />

                <div>
                  <h4 className="text-lg font-bold">{book.title}</h4>
                  <p>{book.author}</p>
                  <p className="text-sm">{book.genre}</p>
                  <p className="text-sm">Rating: {book.rating}</p>
                </div>
              </div>

              <button
                className="btn btn-primary btn-sm mt-3 w-full"
                onClick={() => handleViewDetails(book._id)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
