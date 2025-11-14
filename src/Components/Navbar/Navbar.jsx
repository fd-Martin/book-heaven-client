import React, { useContext } from "react";
import toast from "react-hot-toast";

import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success("Logged out successfully!"), navigate("/"))
      .catch((err) => toast.error(err.message));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-books">All Books</NavLink>
      </li>
      <li>
        <NavLink to="/add-a-book">Add A Book</NavLink>
      </li>
      <li>
        <NavLink to="/my-books">My Books</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 py-2 flex justify-between items-center mx-auto max-w-7xl">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow text-xl font-bold flex flex-col"
          >
            {links}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" avatar">
                <div className="  ">{user &&
                    <>
                    <img
                    className="w-12 h-12"
                    src={
                      user?.photoURL ||
                      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    }
                    alt="avatar"
                  />
                  <p className="text-sm">{user?.displayName || "User"}</p>
                    </>}
                    
          
                </div>
              </label>
            </div>
          </ul>
        </div>

        <Link to="/" className="text-xl ml-2 hidden lg:flex">
          <img src={"/logo.png"} alt="Logo" className="w-[200px]" />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center ">
        <ul className="menu menu-horizontal px-1 text-xl font-bold hidden lg:flex">
          {links}
        </ul>
        <Link to="/" className="text-xl ml-2 flex lg:hidden ">
          <img
            src={"/logo.png"}
            alt="Logo"
            className="w-[120px] md:w-[150px]"
          />
        </Link>
      </div>
      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-3">
        <ThemeToggle />
        {loading ? (
          //  Skeleton placeholder while checking auth
          <div className="flex items-center space-x-2">
            <div className="skeleton w-10 h-10 rounded-full"></div>
            <div className="skeleton w-16 h-6 rounded"></div>
          </div>
        ) : user ? (
          <>
            {/* Profile Image */}
            <div className="relative group hidden lg:block">
              <img
                src={
                  user?.photoURL ||
                  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                }
                alt="avatar"
                className="w-10 h-10 rounded-full border cursor-pointer"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition z-10">
                {user?.displayName || "User"}
              </span>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleSignOut}
              className="btn btn-sm btn-error text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-sm btn-primary">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-sm btn-outline">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
