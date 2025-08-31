import { Link } from "react-router-dom";

export default function HeaderHome() {
  return (
    <header className="w-full bg-base-white/80 backdrop-blur-sm fixed top-0 left-0 z-50 mb-24">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="/">
          <img src="/logoPropydis.jpg" alt="Logo" className="h-12" />
        </Link>

        {/* Nav */}
        <nav className="flex gap-6 text-base-dark font-medium">
          <Link to="/" className="hover:text-accent1-blue transition">Inicio</Link>
          <Link to="/project" className="hover:text-accent1-blue transition">Proyectos</Link>
          <Link to="/property" className="hover:text-accent1-blue transition">Propiedades</Link>
          <Link to="/contact" className="hover:text-accent1-blue transition">Contacto</Link>
          <Link to="/login" className="hover:text-accent1-blue transition">Login</Link>
        </nav>
      </div>
    </header>
  );
}