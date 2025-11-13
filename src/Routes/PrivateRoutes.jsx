import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Components/Context/AuthContext";


const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <span className="loading loading-spinner text-success mt-20 flex justify-center"></span>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace state={location} />;
  }

  return children;
};

export default PrivateRoutes;
