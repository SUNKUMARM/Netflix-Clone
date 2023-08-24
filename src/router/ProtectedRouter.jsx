import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRouter;

export const ProtectedRouteForUnAuthorizedPage = ({ children }) => {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to="/movies" />;
  } else {
    return children;
  }
};
