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
          <li><NavLink to="/property" className="hover:text-gray-300">Propiedades</NavLink></li>
          <li><NavLink to="/project" className="hover:text-gray-300">Projectos</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-gray-300">Contacto</NavLink></li>

          {user?.role === "ADMIN" && (
            <>
              <li><NavLink to="/admin" className="hover:text-gray-300">Admin</NavLink></li>
              <li><NavLink to="/admin/property" className="hover:text-gray-300">Administrar Propiedades</NavLink></li>
              <li><NavLink to="/admin/project" className="hover:text-gray-300">Administrar Projectos</NavLink></li>
              <li><NavLink to="/admin/contact" className="hover:text-gray-300">Administrar Contactos</NavLink></li>
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