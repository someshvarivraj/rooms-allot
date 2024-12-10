import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Dashboard from "./features/dashboard/Dashboard";

import { AuthProvider } from "./context/AuthContext"; // Auth context provider
import AppRoutes from "./routes/routes"; // All your routes

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
