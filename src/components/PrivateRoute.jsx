import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  // If user is logged in, render the children components
  // Otherwise, redirect to the home page
  return user ? children : <Navigate to="/" />;
}