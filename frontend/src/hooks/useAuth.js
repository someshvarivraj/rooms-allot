import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // The context that holds auth status

export const useAuth = () => {
  console.log("inside useAuth");
  return useContext(AuthContext);
};
