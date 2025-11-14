import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Loader/Loader"; // make sure you have your loader component

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user books
  useEffect(() => {
    if (user?.email) {
      //   setLoading(true);
      axios
        .get(`http://localhost:3000/my-books?email=${user.email}`)
        .then((res) => {
          setBooks(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [user]);

  // Delete Book
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This book will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/delete-book/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Book removed successfully", "success");
              setBooks(books.filter((book) => book._id !== id));
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete the book", "error");
          });
      }
    });
  };

  // Update Book
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedBook = {
      title: form.title.value,
      author: form.author.value,
      genre: form.genre.value,
      rating: form.rating.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
    };

    axios
      .patch(
        `http://localhost:3000/update-book/${selectedBook._id}`,
        updatedBook
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Updated!", "Book updated successfully!", "success");

          // Update UI
          const newList = books.map((book) =>
            book._id === selectedBook._id ? { ...book, ...updatedBook } : book
          );
          setBooks(newList);
          setSelectedBook(null); // Close modal
        }
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to update the book", "error");
      });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-base-100 z-50">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">My Books</h2>

      {books.length === 0 ? (
        <p className="text-center text-lg font-medium mt-10">
          No books added yet.
        </p>
      ) : (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>
                  <img
                    src={book.coverImage}
                    alt="cover"
                    className="w-16 h-20 object-cover rounded"
                    onError={(e) => (e.target.src = "/dummy.jpg")}
                  />
                </td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.rating}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning mr-2"
                    onClick={() => setSelectedBook(book)}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Update Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdateSubmit}
            className="p-6 bg-base-100 text-base-content rounded-lg w-96 shadow-2xl transition-all duration-300 space-y-4"
          >
            <h3 className="text-xl font-bold mb-4 text-center">Update Book</h3>

            {/* Title */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={selectedBook.title}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Author */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Author</span>
              </label>
              <input
                type="text"
                name="author"
                defaultValue={selectedBook.author}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Genre */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Genre</span>
              </label>
              <input
                type="text"
                name="genre"
                defaultValue={selectedBook.genre}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Rating */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                defaultValue={selectedBook.rating}
                min="1"
                max="5"
                step="0.1"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Summary */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Summary</span>
              </label>
              <textarea
                name="summary"
                defaultValue={selectedBook.summary}
                className="textarea textarea-bordered w-full"
                required
              />
            </div>

            {/* Cover Image */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Cover Image URL
                </span>
              </label>
              <input
                type="text"
                name="coverImage"
                defaultValue={selectedBook.coverImage}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button className="btn btn-primary w-1/2 mr-2" type="submit">
                Save
              </button>
              <button
                className="btn w-1/2 ml-2"
                type="button"
                onClick={() => setSelectedBook(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyBooks;
