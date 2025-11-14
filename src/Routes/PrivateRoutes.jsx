import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Components/Context/AuthContext";


const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
          <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-success text-3xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace state={location} />;
  }

  return children;
};

export default PrivateRoutes;
