import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Custom hook for authentication logic

const ProtectedRoute = ({ children }) => {
  console.log("inside ProtectedRoute");
  const { isAuthenticated } = useAuth(); // Use the authentication state from the custom hook

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or a loading spinner if you're checking token validity asynchronously
  }

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
