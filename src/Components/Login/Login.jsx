import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { signInUser, signInWithGoogle, resetPassword } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Login handler
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    if (!email || !password) {
      toast.error("Please fill in both fields!");
      return;
    }

    signInUser(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(location.state?.pathname || "/");
      })
      .catch((err) => {
        if (err.message.includes("auth/invalid-credential")) {
          toast.error("Invalid email or password!");
        } else {
          toast.error(err.message);
        }
      });
  };

  // Google login
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(location.state?.pathname || "/");
      })
      .catch((err) => toast.error(err.message));
  };

  // Reset password
  const handleResetPassword = () => {
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl my-12">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {/* Email + Password Form */}
        <form onSubmit={handleSignIn}>
          {/* Email */}
          <label className="label font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          {/* 
          <label className="label mt-3 font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="border rounded-sm  w-full py-2 pl-2"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-white hover:text-gray-100"
              
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div> */}

          <label className="label mt-3 font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="border-2 border-gray-500 rounded-sm w-full py-2 pl-2 focus:border-gray-600 focus:outline-none"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-200"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="mt-2 text-right">
            <button
              type="button"
              onClick={handleResetPassword}
              className="link link-hover text-blue-500 bg-transparent border-none p-0"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-neutral w-full mt-4">
            Login
          </button>
        </form>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border w-full mt-3 flex items-center justify-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google"
            className="w-5 h-5"
          />
          Login with Google
        </button>

        {/* Signup Link */}
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link className="text-blue-600 font-semibold" to="/register">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
