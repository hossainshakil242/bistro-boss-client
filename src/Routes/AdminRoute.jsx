import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const [isAdmin,isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div
        className="radial-progress"
        style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}
        role="progressbar"
      >
        70%
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
