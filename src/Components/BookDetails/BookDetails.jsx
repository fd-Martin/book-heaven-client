import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Loader/Loader";

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
      .get(`https://book-heaven-server-mu-weld.vercel.app/book-details/${id}`)
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
        .get(`https://book-heaven-server-mu-weld.vercel.app/comments/${id}`)
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
      await axios.post(
        "https://book-heaven-server-mu-weld.vercel.app/add-comment",
        commentData
      );
      setNewComment("");
      setComments((prev) => [commentData, ...prev]);
    } catch (err) {
      console.log(err);
    }
  };

  if (bookLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-base-100 z-50">
        <Loader />
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
        <div className="w-fullh-[200px] md:h-[300px] lg:h-[450px] overflow-hidden">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover"
            onError={(e) => (e.target.src = "/dummy.jpg")}
          />
        </div>

        <div className="p-6 space-y-3">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="mt-1">By {book.author}</p>
          <p className="font-semibold">
            <span className="font-bold">Genre:</span> {book.genre}
          </p>
          <p className="font-semibold">
            <span className="font-bold">Rating:</span> {book.rating} ⭐
          </p>
          {/* Preserve line breaks in summary */}
          {/* <p className="mt-4 max-h-60 overflow-x-auto whitespace-pre-line">{book.summary}</p> */}
          <p className="mt-4 whitespace-pre-line">{book.summary}</p>
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
            key={c._id}
            className="flex gap-4 p-4 rounded-xl shadow-sm border"
          >
            <img
              src={c.photoURL}
              className="w-14 h-14 object-cover "
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
