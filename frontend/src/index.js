import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the entire font family
import "@fontsource/roboto";
import { AuthProvider } from "./context/AuthContext";

// OR import specific weights and styles to reduce bundle size
import "@fontsource/roboto/400.css"; // Regular weight
import "@fontsource/roboto/700.css"; // Bold weight

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
