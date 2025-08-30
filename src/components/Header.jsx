import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-blue-900 text-white">
      <div className="font-bold text-lg">
        <Link to="/" className="hover:text-gray-300">PropyDis Studio</Link>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li><NavLink to="/" className="hover:text-gray-300">Home</NavLink></li>
          <li><NavLink to="/properties" className="hover:text-gray-300">Properties</NavLink></li>
          <li><NavLink to="/projects" className="hover:text-gray-300">Projects</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink></li>

          {user?.role === "ADMIN" && (
            <>
              <li><NavLink to="/admin" className="hover:text-gray-300">Admin</NavLink></li>
              <li><NavLink to="/admin/properties" className="hover:text-gray-300">Admin Properties</NavLink></li>
              <li><NavLink to="/admin/projects" className="hover:text-gray-300">Admin Projects</NavLink></li>
              <li><NavLink to="/admin/contacts" className="hover:text-gray-300">Admin Contacts</NavLink></li>
            </>
          )}

          {user ? (
            <li>
              <button
                onClick={handleLogout}
                className="border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-900 transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li><NavLink to="/login" className="hover:text-gray-300">Login</NavLink></li>
          )}
        </ul>
      </nav>
    </header>
  );
}