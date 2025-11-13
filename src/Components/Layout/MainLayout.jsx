import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto w-full flex-1">
        <Outlet></Outlet>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
