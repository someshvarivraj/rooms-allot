// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const AuthContext = createContext();

// AuthContext provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Check token validity (you can use an API or JWT validation logic)

    const checkAuth = async () => {
      try {
        console.log("checkAuth2");
        const response = await axios.get("http://localhost:4000/verify-token", {
          withCredentials: true, // Sending the JWT token stored in cookies
        });
        console.log("response", response);
        if (response.data.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
        //console.log(error);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
