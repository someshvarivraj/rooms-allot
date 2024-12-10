// src/services/authService.js
import axios from "axios";

// API URL
const API_URL = "http://localhost:4000";

// Function to handle login
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/signin`,
      {
        username,
        password,
      },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
export const signUpUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      username,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
