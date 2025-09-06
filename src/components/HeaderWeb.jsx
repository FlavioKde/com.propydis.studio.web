import { Link, useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AdminPropertyDropdown from "./AdminPropertyDropdown";
import AdminProjectDropdown from "./AdminProjectDropdown";
import AdminContactDropdown from "./AdminContactDropdown";

export default function HeaderWeb() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isAdmin = user?.roles?.includes("ROLE_ADMIN");

  return (
    <header
      className="relative bg-cover bg-center h-24 mb-24"
      style={{ backgroundImage: "url('/boceto_portada.jpg')" }}
    >
      <div className="absolute inset-0 bg-base-white bg-opacity-30"></div>

      <div className="relative z-10 container mx-auto flex items-center justify-between px-8 h-full">
        <Link to="/">
          <img src="/logoPropydis.jpg" alt="Logo" className="h-10" />
        </Link>

        {/* Nav principal */}
        <nav className="relative flex gap-6 text-base-dark font-medium z-50 items-center">
          {/* Enlaces públicos solo si no es admin */}
          {!isAdmin && (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent1-blue font-bold border-b-2 border-accent1-blue"
                    : "hover:text-accent1-blue transition"
                }
              >
                Inicio
              </NavLink>

              <NavLink
                to="/project"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent1-blue font-bold border-b-2 border-accent1-blue"
                    : "hover:text-accent1-blue transition"
                }
              >
                Proyectos
              </NavLink>

              <NavLink
                to="/property"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent1-blue font-bold border-b-2 border-accent1-blue"
                    : "hover:text-accent1-blue transition"
                }
              >
                Propiedades
              </NavLink>

              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive  
                    ? "text-accent1-blue font-bold border-b-2 border-accent1-blue"
                    : "hover:text-accent1-blue transition"
                }
              >
                Servicios
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent1-blue font-bold border-b-2 border-accent1-blue"
                    : "hover:text-accent1-blue transition"
                }
              >
                Contacto
              </NavLink>
            </>
          )}

          {/* Menús Admin con dropdowns */}
          {isAdmin && (
            <div className="flex gap-4">
              <AdminPropertyDropdown />
              <AdminProjectDropdown />
              <AdminContactDropdown />
            </div>
          )}

          {/* Login/Logout */}
          {user ? (
            <button
              onClick={handleLogout}
              className="border border-accent1-blue px-3 py-1 rounded hover:bg-accent1-blue hover:text-white transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-accent1-blue transition">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}