import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div>
      <div className="text-center my-10">
        <img src={"./errorpage.png"} alt="" className="mx-auto" />
        <h2 className="text-5xl font-semibold text-black mb-4">
          OPPS!! page not found!
        </h2>
        <p className="mb-6">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="btn bg-blue-600 text-white text-[16px] px-8 py-2"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;