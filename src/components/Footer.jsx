import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      
      <div className="p-6 border rounded shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2 text-blue-900">Propiedades</h3>
        <p className="text-gray-600 mb-4">
          Explora nuestra selección de propiedades exclusivas.
        </p>
        <Link to="/properties" className="text-blue-700 hover:underline">
          Ver más →
        </Link>
      </div>

      <div className="p-6 border rounded shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2 text-blue-900">Proyectos</h3>
        <p className="text-gray-600 mb-4">
          Descubre nuestros proyectos en desarrollo.
        </p>
        <Link to="/projects" className="text-blue-700 hover:underline">
          Ver más →
        </Link>
      </div>

      <div className="p-6 border rounded shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2 text-blue-900">Contacto</h3>
        <p className="text-gray-600 mb-4">
          Hablemos sobre tu próximo proyecto.
        </p>
        <Link to="/contact" className="text-blue-700 hover:underline">
          Ir a contacto →
        </Link>
      </div>

      {/* Info de contacto */}
      <div className="text-sm text-black text-center md:text-right">
        <p>© {new Date().getFullYear()} PropyDis Studio</p>
        <p>Email: infoPropydis@gmail.com</p>
      </div>

    </footer>
  );
}