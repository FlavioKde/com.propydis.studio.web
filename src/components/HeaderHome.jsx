import { Link, useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function HeaderHome() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="w-full bg-base-white/80 backdrop-blur-sm fixed top-0 left-0 z-50 mb-24">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="/">
          <img src="/logoPropydis.jpg" alt="Logo" className="h-12" />
        </Link>

        {/* Nav - MENÚ PRINCIPAL CON NavLink */}
        <nav className="flex gap-6 text-base-dark font-medium">
          {/* Items del menú con NavLink */}
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
            to="/contact"
            className={({ isActive }) => 
              isActive 
                ? "text-accent1-blue font-bold border-b-2 border-accent1-blue" 
                : "hover:text-accent1-blue transition"
            }
          >
            Contacto
          </NavLink>

          {/* Menú Admin también con NavLink */}
          {user?.roles?.includes("ROLE_ADMIN") && (
            <>
              <NavLink 
                to="/admin"
                className={({ isActive }) => 
                  isActive 
                    ? "text-gray-700 font-bold border-b-2 border-gray-700" 
                    : "hover:text-gray-500 transition"
                }
              >
                Admin
              </NavLink>
              <NavLink 
                to="/admin/property"
                className={({ isActive }) => 
                  isActive 
                    ? "text-gray-700 font-bold border-b-2 border-gray-700" 
                    : "hover:text-gray-500 transition"
                }
              >
                Propiedades
              </NavLink>
              <NavLink 
                to="/admin/project"
                className={({ isActive }) => 
                  isActive 
                    ? "text-gray-700 font-bold border-b-2 border-gray-700" 
                    : "hover:text-gray-500 transition"
                }
              >
                Proyectos
              </NavLink>
              <NavLink 
                to="/admin/contact"
                className={({ isActive }) => 
                  isActive 
                    ? "text-gray-700 font-bold border-b-2 border-gray-700" 
                    : "hover:text-gray-500 transition"
                }
              >
                Contactos
              </NavLink>
            </>
          )}

          {/* Login/Logout con Link (no necesita estado activo) */}
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