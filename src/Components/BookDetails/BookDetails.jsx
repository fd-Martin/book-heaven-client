import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [book, setBook] = useState(null);
  const [bookLoading, setBookLoading] = useState(true);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch book details
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

  // Fetch comments every 3 seconds (realtime)
  useEffect(() => {
    if (!id) return;

    const fetchComments = () => {
      axios
        .get(`http://localhost:3000/comments/${id}`)
        .then((res) => setComments(res.data))
        .catch((err) => console.log(err));
    };

    fetchComments();
    const interval = setInterval(fetchComments, 3000);
    return () => clearInterval(interval);
  }, [id]);

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;

    if (!user) {
      alert("Please login to comment");
      return;
    }

    const commentData = {
      bookId: id,
      comment: newComment,
      userName: user.displayName || "Anonymous",
      photoURL: user.photoURL || "/dummy.jpg",
      createdAt: new Date(),
    };

    try {
      await axios.post("http://localhost:3000/add-comment", commentData);
      setNewComment("");
      setComments((prev) => [commentData, ...prev]);
    } catch (err) {
      console.log(err);
    }
  };

  if (bookLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-success text-3xl"></span>
      </div>
    );
  }

  if (!book)
    return (
      <p className="text-center mt-8 text-xl font-medium">Book not found</p>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 mt-8 space-y-8">
      {/* Book Card */}
      <div className="  shadow-2xl rounded-xl overflow-hidden border border-gray-200  transition-transform transform  duration-300">
        <div className="relative w-full h-[450px] overflow-hidden">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-500"
            onError={(e) => (e.target.src = "/dummy.jpg")}
          />
          <div className="absolute bottom-0 left-0 w-full  p-4">
            <h1 className="text-3xl font-bold ">{book.title}</h1>
            <p className=" mt-1">By {book.author}</p>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <p className="font-semibold  ">
            <span className="font-bold">Genre:</span> {book.genre}
          </p>
          <p className="font-semibold  ">
            <span className="font-bold">Rating:</span> {book.rating} ⭐
          </p>
          <p className="mt-4   leading-relaxed">{book.summary}</p>
        </div>
      </div>

      {/* Comment Section */}
      <div className=" p-6 rounded-xl shadow-lg space-y-4 border border-gray-300 border-gray-700">
        <h2 className="text-2xl font-bold  ">Leave a Comment</h2>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="textarea textarea-bordered w-full h-24 resize-none rounded-lg focus:outline-none  "
          placeholder="Write your comment..."
        ></textarea>
        <button
          onClick={handleCommentSubmit}
          className="btn btn-primary bg-blue-600  text-white rounded-lg px-6 py-2 transition-all"
        >
          Post Comment
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold  ">Comments</h2>
        {comments.length === 0 && <p className=" ">No comments yet.</p>}
        {comments.map((c) => (
          <div
            key={c._id || Math.random()}
            className="flex gap-4 p-4  bg-gray-800 rounded-xl shadow-sm border border-gray-200 border-gray-700 transition-transform transform "
          >
            <img
              src={c.photoURL}
              className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
              alt="User"
            />
            <div>
              <p className="font-bold  ">{c.userName}</p>
              <p className=" ">{c.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
