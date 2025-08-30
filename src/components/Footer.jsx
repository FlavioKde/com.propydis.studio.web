import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo / Nombre */}
        <div className="font-bold text-lg">
          <Link to="/" className="hover:text-gray-300">PropyDis Studio</Link>
        </div>

        {/* Navegación rápida */}
        <nav>
          <ul className="flex flex-wrap gap-4 justify-center">
            <li><Link to="/properties" className="hover:text-gray-300">Properties</Link></li>
            <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>

        {/* Info de contacto */}
        <div className="text-sm text-gray-300 text-center md:text-right">
          <p>© {new Date().getFullYear()} PropyDis Studio</p>
          <p>Email: contacto@propydis.com</p>
        </div>
      </div>
    </footer>
  );
}