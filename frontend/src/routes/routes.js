// src/routes/routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes"; // Import the ProtectedRoute component
import Dashboard from "../features/dashboard/Dashboard";
import SignIn from "../features/auth/SignIn";
import SignUp from "../features/auth/SignUp";
import { AuthProvider } from "../context/AuthContext";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <AuthProvider>
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          </AuthProvider>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
