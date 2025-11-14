import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Components/Context/AuthContext";
import Loader from "../Components/Loader/Loader";


const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-base-100 z-50">
      <Loader />
    </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace state={location} />;
  }

  return children;
};

export default PrivateRoutes;
