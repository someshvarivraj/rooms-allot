import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../services/authServices";
export default function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }
    try {
      const response = await loginUser(username, password); // Use the API function

      if (
        response.status === 200 &&
        response.data.message === "Login successful"
      ) {
        navigate("/dashboard"); // Navigate to user-specific dashboard
      } else {
        alert("Invalid username or password.");
      }
    } catch (error) {
      console.error("Error during login", error);
      alert("Error logging in. Please try again.");
    }
    // try {
    //   const response = await axios.post("http://localhost:4000/signin", {
    //     username,
    //     password,
    //   });

    //   if (
    //     response.status === 200 &&
    //     response.data.message === "Login successful"
    //   ) {
    //     navigate("/dashboard");
    //   } else {
    //     alert("Invalid username or password.");
    //   }
    // } catch (error) {
    //   console.error("Error during login", error);
    //   alert("Error logging in. Please try again.");
    // }
  };

  return (
    <div className="flex items-center justify-center  ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl  text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-50"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white   py-3 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
        <span></span>

        <h2
          className="mt-5 text-blue-400 underline cursor-pointer hover:text-blue-500  "
          onClick={() => navigate("/signup")}
        >
          create an account
        </h2>
      </div>
    </div>
  );
}
