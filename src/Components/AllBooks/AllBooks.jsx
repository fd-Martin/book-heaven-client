// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import Loader from "../Loader/Loader";

// const AllBooks = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("https://book-heaver-server.vercel.app/all-books")
//       .then((res) => {
//         setBooks(res.data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   const handleViewDetails = (id) => {
//     navigate(`/book-details/${id}`);
//   };

//   if (loading) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-base-100 z-50">
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <h2 className="text-2xl font-bold mb-4">All Books</h2>

//       {/* Responsive Table Wrapper */}
//       <div className="max-w-5xl mx-auto  w-full">
//         <table className="table table-zebra w-full min-w-[600px]">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Cover</th>
//               <th>Book Name</th>
//               <th>Author</th>
//               <th>Genre</th>
//               <th>Rating</th>
//               <th>Details</th>
//             </tr>
//           </thead>

//           <tbody>
//             {books.map((book, index) => (
//               <tr key={book._id}>
//                 <th>{index + 1}</th>

//                 <td>
//                   <img
//                     src={book.coverImage}
//                     alt={book.title}
//                     className="w-12 h-12 sm:w-12 sm:h-12 object-cover rounded"
//                     onError={(e) => (e.target.src = "/dummy.jpg")}
//                   />
//                 </td>

//                 <td className="font-medium w-1/5">{book.title}</td>
//                 <td>{book.author}</td>
//                 <td>{book.genre}</td>
//                 <td>{book.rating}</td>

//                 <td>
//                   <button
//                     className="btn btn-sm bg-blue-600 p-2 rounded-md text-white"
//                     onClick={() => handleViewDetails(book._id)}
//                   >
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile-friendly Grid View (optional) */}
//       <div className="block sm:hidden mt-6">
//         <h3 className="font-bold text-lg mb-3">Mobile View</h3>

//         <div className="grid grid-cols-1 gap-4">
//           {books.map((book) => (
//             <div
//               key={book._id}
//               className="border p-3 rounded shadow bg-base-100"
//             >
//               <div className="flex gap-3">
//                 <img
//                   src={book.coverImage}
//                   alt={book.title}
//                   className="w-20 h-28 object-cover rounded"
//                 />

//                 <div>
//                   <h4 className="text-lg font-bold">{book.title}</h4>
//                   <p>{book.author}</p>
//                   <p className="text-sm">{book.genre}</p>
//                   <p className="text-sm">Rating: {book.rating}</p>
//                 </div>
//               </div>

//               <button
//                 className="btn btn-primary btn-sm mt-3 w-full"
//                 onClick={() => handleViewDetails(book._id)}
//               >
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllBooks;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loader from "../Loader/Loader";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://book-heaver-server.vercel.app/all-books")
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
      <div className="fixed inset-0 flex items-center justify-center bg-base-100 z-50">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
        All Books
      </h2>

      {/* Desktop/Table View */}
      <div className="hidden sm:block overflow-x-auto">
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
              <tr
                key={book._id}
                className=" transition-colors"
              >
                <th>{index + 1}</th>
                <td>
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-12 h-16 sm:w-16 sm:h-20 object-cover rounded"
                    onError={(e) => (e.target.src = "/dummy.jpg")}
                  />
                </td>
                <td className="font-medium">{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.rating}</td>
                <td>
                  <button
                    className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 rounded-md px-3 py-1"
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

      {/* Mobile Grid View */}
      <div className="block sm:hidden mt-6">
        <h3 className="font-bold text-lg mb-3 text-center">Mobile View</h3>
        <div className="grid grid-cols-1 gap-4">
          {books.map((book) => (
            <div
              key={book._id}
              className="border p-3 rounded-lg shadow bg-base-100 flex flex-col sm:flex-row"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full sm:w-24 h-40 sm:h-32 object-cover rounded mb-3 sm:mb-0"
              />
              <div className="flex-1 sm:ml-4">
                <h4 className="text-lg font-bold truncate">{book.title}</h4>
                <p className="text-sm text-gray-700 truncate">{book.author}</p>
                <p className="text-sm text-gray-500">{book.genre}</p>
                <p className="text-sm font-semibold mt-1">
                  Rating: {book.rating}
                </p>
                <button
                  className="btn btn-primary btn-sm mt-3 w-full sm:w-auto"
                  onClick={() => handleViewDetails(book._id)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
