import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!user.roles?.includes("ROLE_ADMIN")) {
    return <Navigate to="/" />;
  }

  return children;
}