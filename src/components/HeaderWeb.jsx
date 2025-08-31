import { Link } from "react-router-dom";

export default function HeaderWeb() {
  return (
    <>
    <header
      className="relative bg-cover bg-center h-24 mb-24"
      style={{ backgroundImage: "url('/boceto.jpg')" }}
    >
      <div className="absolute inset-0 bg-base-black bg-opacity-30"></div>

      <div className="relative z-10 container mx-auto flex items-center justify-between px-8 h-full">
        <Link to="/">
          <img src="/logoPropydis.jpg" alt="Logo" className="h-10" />
        </Link>

        <nav className="flex gap-6 text-base-white font-medium">
          <Link to="/" className="hover:text-accent1-blue transition">Inicio</Link>
          <Link to="/project" className="hover:text-accent1-blue transition">Proyectos</Link>
          <Link to="/property" className="hover:text-accent1-blue transition">Propiedades</Link>
          <Link to="/contact" className="hover:text-accent1-blue transition">Contacto</Link>
          <Link to="/login" className="hover:text-accent1-blue transition">Login</Link>
        </nav>
        


      </div>
    </header>
      
      </>
  );
}