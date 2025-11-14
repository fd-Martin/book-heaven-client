import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Loader/Loader";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Password must contain at least one uppercase letter!");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Password must contain at least one lowercase letter!");
      return;
    } else if (!/(?=.*[!@#$%^&*(),.?\":{}|<>])/.test(password)) {
      toast.error("Password must contain at least one special character!");
      return;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    setLoading(true);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Account created successfully!");
            navigate("/");
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then(() => {
        toast.success("Registered with Google!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="relative">
      {/* Full-screen loading spinner */}
      {loading && (
    <div className="fixed inset-0 flex items-center justify-center bg-base-100 z-50">
      <Loader />
    </div>
      )}

      <div className="card bg-base-100 w-full mx-auto max-w-sm shadow-2xl my-10">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">Register</h1>

          <form onSubmit={handleRegister}>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
              required
              disabled={loading}
            />

            <label className="label mt-2">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
              disabled={loading}
            />

            <label className="label mt-2">Email</label>
            <input
              type="email"
              name="email"
              className="border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
              required
              disabled={loading}
            />

            <label className="label mt-3 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
                placeholder="Enter your password"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-200"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              className="btn btn-neutral w-full mt-4"
              disabled={loading}
            >
              Register
            </button>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border mt-3 flex justify-center items-center"
            disabled={loading}
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="google"
              className="w-5 h-5 mr-2"
            />
            Register with Google
          </button>

          <p className="mt-3 text-center">
            Already have an account?{" "}
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
