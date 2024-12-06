import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpCrad() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { username, password });
  };

  return (
    <div className="flex items-center justify-center  ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl  text-center mb-6">Signup</h2>
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
            className="w-full  bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Create an account
          </button>
        </form>
        <span></span>
        <h2
          className="mt-5 text-blue-400 underline cursor-pointer hover:text-blue-500"
          onClick={() => navigate("/login")}
        >
          Already have an account
        </h2>
      </div>
    </div>
  );
}
