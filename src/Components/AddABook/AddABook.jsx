import React, { useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthContext";

const AddABook = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newBook = {
      ...data,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    axios
      .post("http://localhost:3000/add-book", newBook)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Book added successfully!",
            icon: "success",
          });
          reset();
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add the book",
          icon: "error",
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full px-6">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add a New Book</h1>
          <p className="py-6">
            Fill out the form to add a new book to the collection.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-3xl shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Title */}
              <div>
                <label className="label">Title</label>
                <input
                  type="text"
                  className=" border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>

              {/* Author */}
              <div>
                <label className="label">Author</label>
                <input
                  type="text"
                  className=" border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
                  {...register("author", { required: "Author is required" })}
                />
                {errors.author && (
                  <p className="text-red-500 text-sm">
                    {errors.author.message}
                  </p>
                )}
              </div>

              {/* Genre */}
              <div>
                <label className="label">Genre</label>
                <input
                  type="text"
                  className=" border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
                  {...register("genre", { required: "Genre is required" })}
                />
                {errors.genre && (
                  <p className="text-red-500 text-sm">{errors.genre.message}</p>
                )}
              </div>

              {/* Rating */}
              <div>
                <label className="label">Rating (1–5)</label>
                <input
                  type="number"
                  className=" border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
                  min="1"
                  max="5"
                  {...register("rating", {
                    required: "Rating is required",
                    min: { value: 1, message: "Minimum rating is 1" },
                    max: { value: 5, message: "Maximum rating is 5" },
                  })}
                />
                {errors.rating && (
                  <p className="text-red-500 text-sm">
                    {errors.rating.message}
                  </p>
                )}
              </div>

              {/* Summary (Full Width) */}
              <div className="md:col-span-2">
                <label className="label">Summary</label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  {...register("summary", { required: "Summary is required" })}
                ></textarea>
                {errors.summary && (
                  <p className="text-red-500 text-sm">
                    {errors.summary.message}
                  </p>
                )}
              </div>

              {/* Cover Image URL */}
              <div className="md:col-span-2">
                <label className="label">Cover Image URL</label>
                <input
                  type="text"
                  className=" border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
                  {...register("coverImage", {
                    required: "Cover image URL is required",
                  })}
                />
                {errors.coverImage && (
                  <p className="text-red-500 text-sm">
                    {errors.coverImage.message}
                  </p>
                )}
              </div>

              {/* Auto-Filled User Fields (Read Only) */}
              <div>
                <label className="label">Your Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  className=" border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
                  readOnly
                />
              </div>

              <div>
                <label className="label">Your Name</label>
                <input
                  type="text"
                  value={user?.displayName || ""}
                  className=" border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
                  readOnly
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="btn btn-neutral mt-6" type="submit">
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddABook;
